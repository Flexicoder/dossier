
import 'react-native';
import React from 'react';
import MedicalDetail from '../../src/components/MedicalDetail';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("MedicalDetail", () => {
    it('renders correctly', () => {
        const medicalDetail = renderer.create(<MedicalDetail />);
        expect(medicalDetail.toJSON()).toMatchSnapshot();
      });
})


describe("MedicalDetail", () => {
    it('contains supplied data', () => {
        const medicalDetail = renderer.create(<MedicalDetail treatments="Chemotherapy" consultant="Mary" clinicalNurseSpecialist="Tom" diagnosis="Cancer" />);
        const stringVersion = JSON.stringify(medicalDetail.toJSON())
        expect(stringVersion).toMatch(/Chemotherapy/);
        expect(stringVersion).toMatch(/Mary/);
        expect(stringVersion).toMatch(/Tom/);
        expect(stringVersion).toMatch(/Cancer/);
    });
})