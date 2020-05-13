
import 'react-native';
import React from 'react';
import KeyInformation from '../../src/components/KeyInformation';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("Key Information", () => {
    it('renders correctly', () => {
        const keyInfo = {name: "", dateOfBirth: new Date(1588595312810)}
        const keyInformation = renderer.create(<KeyInformation data={keyInfo} onTextChange=""/>);
        expect(keyInformation.toJSON()).toMatchSnapshot();
      });
})


describe("Key Information", () => {
    it('contains supplied data', () => {
      const keyInfo = {dateOfBirth: new Date(1588595312810), name: "Bob"}
      const keyInformation = renderer.create(<KeyInformation data={keyInfo} onTextChange="" />);
        const stringVersion = JSON.stringify(keyInformation.toJSON())
        expect(stringVersion).toMatch(/Bob/);
      });
})