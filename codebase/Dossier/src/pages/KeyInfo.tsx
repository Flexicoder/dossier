import * as React from 'react';
import { Text, View } from 'react-native';
import HospitalNumber from '../components/HospitalNumber'

const KeyInfoPage = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Key Info</Text>
        <HospitalNumber  name="Brighton" number="93993" />
      </View>
    );
  };

  export default KeyInfoPage;