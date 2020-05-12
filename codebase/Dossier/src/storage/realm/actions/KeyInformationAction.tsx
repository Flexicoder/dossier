// @flow
import KeyInformationModel from '../models/KeyInformationModel';
import type { IKeyInformationModel} from '../models/KeyInformationModel';

/**
 * Flow type of customerAction
 * @type {Object}
 */
export type IKeyInformationAction = {
    save(keyInformation: IKeyInformationModel): Promise<KeyInformationModel>,
    retrieve(): IKeyInformationModel,
    clone(): IKeyInformationModel,
}

export default (realmInstance: any): IKeyInformationAction => {
  return {
    save: (keyInformationData: IKeyInformationModel): Promise<KeyInformationModel> => {
      const {_id, name, preferredName, dateOfBirth, address, contactNumber, email, nhsNumber} = keyInformationData;

      return new Promise((resolve, reject) => {
        try {
          const keyInformation: IKeyInformationModel = {
            _id: _id,
            name: name,
            preferredName: preferredName,
            dateOfBirth: dateOfBirth,
            address: address,
            contactNumber: contactNumber,
            email: email,
            nhsNumber: nhsNumber
          };
          realmInstance.write(()=> {
            const savedKeyInfo = realmInstance.create(KeyInformationModel.modelName(), keyInformation, true);
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
     * @return {IKeyInformationModel}
     */
    retrieve: (): IKeyInformationModel => {
        const data = realmInstance.objects(KeyInformationModel.modelName());
      return data;
    },
    clone: (): IKeyInformationModel => {
        // Realm doesn't actually populate object properties until you reference them
        // You also can't use a Realmn object in state as they are immutable, so
        // we make a copy here and return it for the views to use in their state
        const data = realmInstance.objects(KeyInformationModel.modelName());
        let clone: IKeyInformationModel = {dateOfBirth: new Date()};

        if(data.length > 0) {
            const realmObject: IKeyInformationModel = data[0]
            for (const key in realmObject) {
                clone[key] = realmObject[key];
            }
          }
        return clone
    }
  };
};