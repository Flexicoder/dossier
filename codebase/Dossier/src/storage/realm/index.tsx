import Realm from 'realm';

import save from './actions/KeyInformationAction';
import KeyInformationModel from './models/KeyInformationModel';
import type{IKeyInformationAction} from './actions/KeyInformationAction';

const localRealmInstance = new Realm({
  schema: [KeyInformationModel],
});


export const getRealmInstance = (): Realm => localRealmInstance;

export const keyInformationActions: IKeyInformationAction = save(getRealmInstance());