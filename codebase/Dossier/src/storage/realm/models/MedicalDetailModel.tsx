export default class MedicalDetailModel {
    static modelName() {
        return MedicalDetailModel.schema.name; 
    }
    static primaryKey() {
        return MedicalDetailModel.schema.primaryKey;
    }

    static schema = {
        'name': 'MedicalDetail',
        'primaryKey': '_id',

        'properties': {
            '_id': 'int',
            'treatments': 'string',
            'consultant': 'string?',
            'clinicalNurseSpecialist': 'string?',
            'diagnosis': 'string?'
        }
    }
}

export type IMedicalDetailModel = {
    _id: number;
    treatments: string | null;
    consultant?: string | null;
    clinicalNurseSpecialist?: string | null;
    diagnosis?: string | null;
}