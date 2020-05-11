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
}

/**
 * create customer realm action to save the customer data
 * @param {Realm} realmInstance
 * @return {Object}
 */
export default (realmInstance: any): IKeyInformationAction => {
  return {
    /**
       * set the key information
       * @param {any} keyInformation response from server
       * @return {Promise<KeyInformationModel>} saved Key Information object
       */
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
            console.log(savedKeyInfo)
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
        const data = realmInstance.objects('KeyInformation');
      return data;
    },
  };
};