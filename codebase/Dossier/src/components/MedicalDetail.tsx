import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import  styles  from '../assets/styles'

interface IMedicalDetailComponent {
    data: IMedicalDetailProps
    onTextChange: any
}

interface IMedicalDetailProps {
    treatments?: string | null;
    consultant?: string | null;
    clinicalNurseSpecialist?: string | null;
    diagnosis?: string | null;
}

export default class MedicalDetail extends Component<IMedicalDetailProps> {
    constructor(props: IMedicalDetailComponent) {
        super(props)
        this.onTextChange = this.onTextChange.bind(this)
    }
                
    onTextChange(propertyName, value) {
        this.props.onTextChange('medicalDetail', propertyName, value);
    }

    render() {
        return (
        <View style={styles.container}>
                <View style={styles.line}>
                    <View style={styles.textBox}>
                        <TextInput
                            placeholder="Treatments"
                            multiline={true}
                            onChangeText={text => this.onTextChange('treatments', text)}
                            defaultValue={this.props.data.treatments || ""} />
                    </View>
                </View>
                <View style={styles.line}>
                    <View style={styles.textBox}>
                        <TextInput
                            placeholder="Consultant"
                            onChangeText={text => this.onTextChange('consultant', text )}
                            defaultValue={this.props.data.consultant || ""}
                            />
                    </View>
                </View>
                <View style={styles.line}>
                    <View style={styles.textBox}>
                        <TextInput
                            placeholder="Clinical Nurse Specialist"
                            onChangeText={text => this.onTextChange('clinicalNurseSpecialist', text )}
                            defaultValue={this.props.data.clinicalNurseSpecialist || ""}
                            />
                    </View>
                </View>
                <View style={styles.line}>
                    <View style={styles.textBox}>
                        <TextInput
                            placeholder="Diagnosis"
                            multiline={true}
                            onChangeText={text => this.onTextChange('diagnosis', text )}
                            defaultValue={this.props.data.diagnosis || ""}
                            />
                    </View>
                </View>
            </View>
        );
    }
}