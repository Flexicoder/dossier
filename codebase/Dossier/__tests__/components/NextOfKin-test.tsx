
import 'react-native';
import React from 'react';
import NextOfKin from '../../src/components/NextOfKin';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("Key Information", () => {
    it('renders correctly', () => {
        const nextOfKin = renderer.create(<NextOfKin />);
        expect(nextOfKin.toJSON()).toMatchSnapshot();
      });
})


describe("Key Information", () => {
    it('contains supplied data', () => {
        const nextOfKin = renderer.create(<NextOfKin name="Bob" relationship="Father" />);
        const stringVersion = JSON.stringify(nextOfKin.toJSON())
        expect(stringVersion).toMatch(/Bob/);
        expect(stringVersion).toMatch(/Father/);
      });
})