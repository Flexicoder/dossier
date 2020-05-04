
import 'react-native';
import React from 'react';
import KeyInformation from '../../src/components/KeyInformation';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("Key Information", () => {
    it('renders correctly', () => {
        const keyInformation = renderer.create(<KeyInformation name="" />);
        expect(keyInformation.toJSON()).toMatchSnapshot();
      });
})


describe("Key Information", () => {
    it('contains supplied data', () => {
        const keyInformation = renderer.create(<KeyInformation name="Bob" />);
        const stringVersion = JSON.stringify(keyInformation.toJSON())
        expect(stringVersion).toMatch(/Bob/);
      });
})