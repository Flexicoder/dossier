import * as React from 'react';
import { Text, SafeAreaView, StatusBar, View, ScrollView, Dimensions  } from 'react-native';
import HospitalNumber from '../components/HospitalNumber'
import KeyInformation from '../components/KeyInformation';
import  styles  from '../assets/styles'

const KeyInfoPage = () => {

    return (
      <SafeAreaView style={styles.scrollContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#468189" />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollview}
        scrollEnabled={true}
      >
        <View style={styles.scrollContent}>
        <Text>Key Info</Text>
        <KeyInformation name=""  />
        <HospitalNumber  name="Brighton" number="93993" />
        </View>
      </ScrollView>
    </SafeAreaView>



    );
  };

  export default KeyInfoPage;