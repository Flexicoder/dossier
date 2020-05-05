import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import  styles  from '../assets/styles'

interface MedicalDetailProps {
    treatments?: string | null;
    consultant?: string | null;
    clinicalNurseSpecialist?: string | null;
    diagnosis?: string | null;
}

export default class MedicalDetail extends Component<MedicalDetailProps> {
    constructor(props: MedicalDetailProps) {
        super(props)
        this.state = { name: props.treatments,
                       relationship: props.consultant,
                       address: props.clinicalNurseSpecialist,
                       contactNumber: props.diagnosis }
    }

    render() {
        return (
        <View style={styles.container}>
                <View style={styles.line}>
                    <View style={styles.textBox}>
                        <TextInput
                            placeholder="Treatments"
                            multiline={true}
                            onChangeText={text => this.setState({ treatments: text})}
                            defaultValue={this.props.treatments || ""} />
                    </View>
                </View>
                <View style={styles.line}>
                    <View style={styles.textBox}>
                        <TextInput
                            placeholder="Consultant"
                            onChangeText={text => this.setState( { consultant: text })}
                            defaultValue={this.props.consultant || ""}
                            />
                    </View>
                </View>
                <View style={styles.line}>
                    <View style={styles.textBox}>
                        <TextInput
                            placeholder="Clinical Nurse Specialist"
                            onChangeText={text => this.setState( { clinicalNurseSpecialist: text })}
                            defaultValue={this.props.clinicalNurseSpecialist || ""}
                            />
                    </View>
                </View>
                <View style={styles.line}>
                    <View style={styles.textBox}>
                        <TextInput
                            placeholder="Diagnosis"
                            multiline={true}
                            onChangeText={text => this.setState( { diagnosis: text })}
                            defaultValue={this.props.diagnosis || ""}
                            />
                    </View>
                </View>
            </View>
        );
    }
}