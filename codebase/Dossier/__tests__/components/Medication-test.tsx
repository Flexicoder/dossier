
import 'react-native';
import React from 'react';
import Medication from '../../src/components/Medication';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("Medication", () => {
    it('renders correctly', () => {
        const medication = renderer.create(<Medication />);
        expect(medication.toJSON()).toMatchSnapshot();
      });
})


describe("Medication", () => {
    it('contains supplied data', () => {
        const medication = renderer.create(<Medication drugName="Asprin" dose="10mg" frequency="daily" />);
        const stringVersion = JSON.stringify(medication.toJSON())
        expect(stringVersion).toMatch(/Asprin/);
        expect(stringVersion).toMatch(/10mg/);
        expect(stringVersion).toMatch(/daily/);
    });
})