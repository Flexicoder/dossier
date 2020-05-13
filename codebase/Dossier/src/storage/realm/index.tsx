import Realm from 'realm';

import KeyInformationAction from './actions/KeyInformationAction';
import KeyInformationModel from './models/KeyInformationModel';
import type{IKeyInformationAction} from './actions/KeyInformationAction';

import MedicalDetailAction from './actions/MedicalDetailAction';
import MedicalDetailModel from './models/MedicalDetailModel';
import type{IMedicalDetailAction} from './actions/MedicalDetailAction';

import HospitalNumberAction from './actions/HospitalNumberAction';
import HospitalNumberModel from './models/HospitalNumberModel';
import type{IHospitalNumberAction} from './actions/HospitalNumberAction';

const localRealmInstance = new Realm({
  schema: [KeyInformationModel, 
           MedicalDetailModel, 
           HospitalNumberModel],
});


export const getRealmInstance = (): Realm => localRealmInstance;

export const keyInformation: IKeyInformationAction = KeyInformationAction(getRealmInstance());
export const medicalDetail: IMedicalDetailAction = MedicalDetailAction(getRealmInstance());
export const hospitalNumber: IHospitalNumberAction = HospitalNumberAction(getRealmInstance());