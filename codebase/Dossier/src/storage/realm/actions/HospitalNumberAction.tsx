// @flow
import HospitalNumberModel from '../models/HospitalNumberModel';
import type { IHospitalNumberModel} from '../models/HospitalNumberModel';
import * as Constants from '../../../assets/constants'

/**
 * Flow type of customerAction
 * @type {Object}
 */
export type IHospitalNumberAction = {
    save(hospitalNumber: IHospitalNumberModel): Promise<HospitalNumberModel>,
    retrieve(_id: string): IHospitalNumberModel,
    clone(_id: string): IHospitalNumberModel,
}

export default (realmInstance: any): IHospitalNumberAction => {
  return {
    save: (hospitalNumberData: IHospitalNumberModel): Promise<HospitalNumberModel> => {
      const {_id, number, name} = hospitalNumberData;

      return new Promise((resolve, reject) => {
        try {
          const hospitalNumber: IHospitalNumberModel = {
            _id: _id,
            number: number,
            name: name,
          };
          realmInstance.write(()=> {
            const savedKeyInfo = realmInstance.create(Constants.HOSPITAL_NUMBER, hospitalNumber, true);
            resolve(savedKeyInfo);
          });
        } catch (error) {
          console.log(error)
          resolve(error);
        }
      });
    },
    /**
     * Get the current key Information
     * @return {IHospitalNumberModel}
     */
    retrieve: (_id: string): IHospitalNumberModel => {
        const data = realmInstance.objects(Constants.HOSPITAL_NUMBER);
      return data;
    },
    clone: (_id: string): IHospitalNumberModel => {
        // Realm doesn't actually populate object properties until you reference them
        // You also can't use a Realmn object in state as they are immutable, so
        // we make a copy here and return it for the views to use in their state
        const data = realmInstance.objectForPrimaryKey(Constants.HOSPITAL_NUMBER, _id);
        let clone: IHospitalNumberModel = {};

        console.log(data)

         if(data) {
             for (const key in data) {
                 clone[key] = data[key];
             }
         } else {
          clone['_id'] = _id
         }

        return clone
    }
  };
};