// @flow
import MedicalDetailModel from '../models/MedicalDetailModel';
import type { IMedicalDetailModel} from '../models/MedicalDetailModel';

/**
 * Flow type of customerAction
 * @type {Object}
 */
export type IMedicalDetailAction = {
    save(medicalDetail: IMedicalDetailModel): Promise<MedicalDetailModel>,
    retrieve(): IMedicalDetailModel,
    clone(): IMedicalDetailModel,
}

export default (realmInstance: any): IMedicalDetailAction => {
  return {
    save: (medicalDetailData: IMedicalDetailModel): Promise<MedicalDetailModel> => {
      const {_id, treatments, consultant, clinicalNurseSpecialist, diagnosis} = medicalDetailData;

      return new Promise((resolve, reject) => {
        try {
          const medicalDetail: IMedicalDetailModel = {
            _id: _id,
            treatments: treatments,
            consultant: consultant,
            clinicalNurseSpecialist: clinicalNurseSpecialist,
            diagnosis: diagnosis
          };
          realmInstance.write(()=> {
            const savedMedicalDetail = realmInstance.create(MedicalDetailModel.modelName(), medicalDetail, true);
            resolve(savedMedicalDetail);
          });
        } catch (error) {
            console.log
          resolve(error);
        }
      });
    },
    /**
     * Get the current key Information
     * @return {IMedicalDetailModel}
     */
    retrieve: (): IMedicalDetailModel => {
        const data = realmInstance.objects(MedicalDetailModel.modelName());
      return data;
    },
    clone: (): IMedicalDetailModel => {
        // Realm doesn't actually populate object properties until you reference them
        // You also can't use a Realmn object in state as they are immutable, so
        // we make a copy here and return it for the views to use in their state
        const data = realmInstance.objects(MedicalDetailModel.modelName());
        let clone: IMedicalDetailModel = {};

        if(data.length > 0) {
            const realmObject: IMedicalDetailModel = data[0]
            for (const key in realmObject) {
                clone[key] = realmObject[key];
            }
          }
        return clone
    }
  };
};