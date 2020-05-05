
import 'react-native';
import React from 'react';
import Allergy from '../../src/components/Allergy';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("Allergy", () => {
    it('renders correctly', () => {
        const allergy = renderer.create(<Allergy />);
        expect(allergy.toJSON()).toMatchSnapshot();
      });
})


describe("Allergy", () => {
    it('contains supplied data', () => {
        const allergy = renderer.create(<Allergy details="Penicillin" />);
        const stringVersion = JSON.stringify(allergy.toJSON())
        expect(stringVersion).toMatch(/Penicillin/);
      });
})