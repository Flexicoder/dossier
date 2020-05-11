export default class KeyInformationModel {
    static modelName() {
        return KeyInformationModel.schema.name; 
    }
    static primaryKey() {
        return KeyInformationModel.schema.primaryKey;
    }

    static schema = {
        'name': 'KeyInformation',
        'primaryKey': '_id',

        'properties': {
            '_id': 'int',
            'name': 'string',
            'preferredName': 'string',
            'dateOfBirth': 'date',
            'address': 'string',
            'contactNumber': 'string',
            'email': 'string',
            'nhsNumber': 'string'
        }
    }
}

export type IKeyInformationModel = {
    _id: number,
    name: string;
    preferredName?: string | null;
    dateOfBirth?: Date;
    address?: string | null;
    contactNumber?: string | null;
    email?: string | null;
    nhsNumber?: string | null;
}