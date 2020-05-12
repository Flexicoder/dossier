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
import { keyInformationActions, medicalDetailActions } from '@dossier-storage/realm';
import { IKeyInformationModel } from 'src/storage/realm/models/KeyInformationModel';
import { IMedicalDetailModel } from 'src/storage/realm/models/MedicalDetailModel';


export default class KeyInfoPage extends React.Component {
  constructor(props) {
    super(props)

    //Set default stat values, so the screen can load before Realm responds
    this.state = {keyInfo: { dateOfBirth: new Date() },
                  medicalDetail: {}}

    this.handleTextChange = this.handleTextChange.bind(this);
    this.save = this.save.bind(this)
  }

   handleTextChange(baseObject: string , propertyName: string, value: any) {
     //get the object
     const element = this.state[baseObject]
     //change the value
     element[propertyName] = value
     // update the state
     this.setState({[baseObject]: element })
   }

   save() {
    const keyInfo: IKeyInformationModel = this.state['keyInfo']
    keyInfo._id = 1
    keyInformationActions.save(keyInfo)

    const medicalDetails: IMedicalDetailModel = this.state['medicalDetail']
    medicalDetails._id = 1
    medicalDetailActions.save(medicalDetails)

   }

  componentDidMount() {
    this.setState({keyInfo: keyInformationActions.clone()})

    this.setState({medicalDetail: medicalDetailActions.clone()})
}

    render () {
      const keyInfo = this.state['keyInfo']
      const medicalDetail = this.state['medicalDetail']
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
            <KeyInformation data={keyInfo}
                  onTextChange={this.handleTextChange} />
            <MedicalDetail data={medicalDetail}
                  onTextChange={this.handleTextChange}/>
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
