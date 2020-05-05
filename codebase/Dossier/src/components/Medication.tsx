import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import  styles  from '../assets/styles'

interface MedicationProps {
    drugName?: string | null;
    dose?: string | null;
    frequency?: string | null;
}

export default class Medication extends Component<MedicationProps> {
    constructor(props: MedicationProps) {
        super(props)
        this.state = { drugName: "", dose: "", frequency: "" }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.line}>
                    <View style={styles.textBox}>
                        <TextInput
                            placeholder="Drug Name"
                            onChangeText={text => this.setState({ drugName: text})}
                            defaultValue={this.props.drugName} />
                    </View>
                </View>
                <View style={styles.line}>
                    <View style={styles.textBox}>
                    <TextInput
                        placeholder="Dose"
                        onChangeText={text => this.setState({ dose: text})}
                        defaultValue={this.props.dose} />
                    </View>
                    <View style={styles.textBox}>
                    <TextInput
                        placeholder="Frequency"
                        onChangeText={text => this.setState( { frequency: text })}
                        defaultValue={this.props.frequency}
                        />
                    </View>
                </View>
            </View>
        );
    }
}