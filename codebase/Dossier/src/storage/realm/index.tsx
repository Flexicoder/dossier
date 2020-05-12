import Realm from 'realm';

import KeyInformationAction from './actions/KeyInformationAction';
import KeyInformationModel from './models/KeyInformationModel';
import type{IKeyInformationAction} from './actions/KeyInformationAction';

import MedicalDetailAction from './actions/MedicalDetailAction';
import MedicalDetailModel from './models/MedicalDetailModel';
import type{IMedicalDetailAction} from './actions/MedicalDetailAction';

const localRealmInstance = new Realm({
  schema: [KeyInformationModel, MedicalDetailModel],
});


export const getRealmInstance = (): Realm => localRealmInstance;

export const keyInformationActions: IKeyInformationAction = KeyInformationAction(getRealmInstance());
export const medicalDetailActions: IMedicalDetailAction = MedicalDetailAction(getRealmInstance());