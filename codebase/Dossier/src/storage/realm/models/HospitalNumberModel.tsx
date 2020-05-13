import * as Constants from '../../../assets/constants'

export default class HospitalNumberModel {
    static primaryKey() {
        return HospitalNumberModel.schema.primaryKey;
    }

    static schema = {
        'name': Constants.HOSPITAL_NUMBER,
        'primaryKey': '_id',

        'properties': {
            '_id': 'string',
            'number': 'string',
            'name': 'string'
        }
    }
}

export type IHospitalNumberModel = {
    _id: string,
    number: string;
    name: string;
}