
import 'react-native';
import React from 'react';
import HospitalNumber from '../../src/components/HospitalNumber';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("Hospital number", () => {
    it('renders correctly', () => {
      const data = {_id:1, name:'Brighton', number:"123"}
        const hospitalNumber = renderer.create(<HospitalNumber data={data} onTextChange=""  />);
        expect(hospitalNumber.toJSON()).toMatchSnapshot();
      });
})


describe("Hospital number", () => {
    it('contains supplied data', () => {
        const data = {_id:1, name:'Brighton', number:"123"}
        const hospitalNumber = renderer.create(<HospitalNumber data={data} onTextChange=""  />);
        const stringVersion = JSON.stringify(hospitalNumber.toJSON())
        expect(stringVersion).toMatch(/Brighton/);
        expect(stringVersion).toMatch(/123/);
      });
})


