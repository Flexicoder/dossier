import * as React from 'react';
import { Text, SafeAreaView, StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import  styles  from '../assets/styles'

import HospitalNumber from '../components/HospitalNumber'
import NextOfKin from '../components/NextOfKin'
import KeyInformation from '../components/KeyInformation';
import MedicalHistory from '../components/MedicalHistory';
import Medication from '../components/Medication';
import Allergy from '../components/Allergy';

const KeyInfoPage = () => {

    return (
      <SafeAreaView style={styles.scrollContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#468189" />

      <KeyboardAwareScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollview}
        scrollEnabled={true}
        keyboardShouldPersistTaps='always'
        keyboardDismissMode='on-drag'
        >
          <Text>Key Info</Text>
          <KeyInformation name=""  />
          <HospitalNumber  name="Brighton" number="93993" />
          <NextOfKin />
          <MedicalHistory />
          <Medication />
          <Allergy />
      </KeyboardAwareScrollView>

    </SafeAreaView>
    );
  };

  export default KeyInfoPage;