import * as React from 'react';
import { Text, SafeAreaView, StatusBar, View, ScrollView, Dimensions  } from 'react-native';
import HospitalNumber from '../components/HospitalNumber'
import NextOfKin from '../components/NextOfKin'
import  styles  from '../assets/styles'

const KeyInfoPage = () => {
    return (
      <SafeAreaView style={styles.scrollContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#468189" />
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollview}
        scrollEnabled={true}>
        <View style={styles.scrollContent}>
          <Text>Key Info</Text>
          <HospitalNumber  name="Brighton" number="93993" />
          <NextOfKin />
        </View>
      </ScrollView>
    </SafeAreaView>

    );
  };

  export default KeyInfoPage;