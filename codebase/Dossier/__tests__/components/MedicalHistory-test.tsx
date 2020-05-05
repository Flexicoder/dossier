
import 'react-native';
import React from 'react';
import MedicalHistory from '../../src/components/MedicalHistory';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("Medical History", () => {
    it('renders correctly', () => {
        const medicalHistory = renderer.create(<MedicalHistory />);
        expect(medicalHistory.toJSON()).toMatchSnapshot();
      });
})


describe("Medical History", () => {
    it('contains supplied data', () => {
        const medicalHistory = renderer.create(<MedicalHistory details="Asthma" />);
        const stringVersion = JSON.stringify(medicalHistory.toJSON())
        expect(stringVersion).toMatch(/Asthma/);
      });
})