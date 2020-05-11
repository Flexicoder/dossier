import * as React from 'react';
import { Text, SafeAreaView, StatusBar, Button } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import  styles  from '../assets/styles'

import HospitalNumber from '../components/HospitalNumber'
import NextOfKin from '../components/NextOfKin'
import KeyInformation from '../components/KeyInformation';
import MedicalHistory from '../components/MedicalHistory';
import Medication from '../components/Medication';
import Allergy from '../components/Allergy';
import MedicalDetail from '../components/MedicalDetail';
import { keyInformationActions } from '@dossier-storage/realm';
import { IKeyInformationModel } from 'src/storage/realm/models/KeyInformationModel';


export default class KeyInfoPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: props.name,
                   preferredName: props.preferredName,
                   dateOfBirth: props.dateOfBirth || new Date(),
                   address: props.address,
                   contactNumber: props.contactNumber,
                   email: props.email,
                   nhsNumber: props.nhsNumber }
    this.handleKeyInfoChange = this.handleKeyInfoChange.bind(this);
    this.save = this.save.bind(this)
  }

   handleKeyInfoChange(propertyName: string, value: any) {
     this.setState({[propertyName]: value })
   }

   save() {
    keyInformationActions.save( { _id: 1,
            name: this.state.name,
            address: this.state.address,
            contactNumber: this.state.contactNumber,
            dateOfBirth: this.state.dateOfBirth,
            email: this.state.email,
            nhsNumber: this.state.nhsNumber,
            preferredName: this.state.preferredName});
   }

  componentDidMount() {
    const ki = keyInformationActions.retrieve()

    if(ki.length > 0) {
      const keyInfo: IKeyInformationModel = ki[0]
      this.setState({ name: keyInfo.name,
        preferredName: keyInfo.preferredName,
        dateOfBirth: keyInfo.dateOfBirth,
        address: keyInfo.address,
        contactNumber: keyInfo.contactNumber,
        email: keyInfo.email,
        nhsNumber: keyInfo.nhsNumber})
    } else {
      this.state = {  name: '',
        preferredName: '',
        dateOfBirth: new Date(),
        address: '',
        contactNumber: '',
        email: '',
        nhsNumber: '' }
    }
}

    render () {
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
            <Button title="Save" onPress={this.save}></Button>
            <Text>Key Info</Text>
            <KeyInformation name={this.state.name}
            preferredName={this.state.preferredName}
            dateOfBirth={this.state.dateOfBirth}
            address={this.state.address}
            contactNumber={this.state.contactNumber}
            email={this.state.email}
            nhsNumber={this.state.nhsNumber}
               onKeyInfoChange={this.handleKeyInfoChange} />
            <MedicalDetail />
            <HospitalNumber  name="Brighton" number="93993" />
            <NextOfKin />
            <MedicalHistory />
            <Medication />
            <Allergy />
        </KeyboardAwareScrollView>
  
      </SafeAreaView>
      );
    }

  };
