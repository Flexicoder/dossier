import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import  styles  from '../assets/styles'

interface MedicalHistoryProps {
    details?: string | null;
}

export default class MedicalHistory extends Component<MedicalHistoryProps> {
    constructor(props: MedicalHistoryProps) {
        super(props)
        this.state = { details: props.details }
    }

    render() {
        return (
        <View style={styles.container}>
                <View style={styles.line}>
                    <View style={styles.textBox}>
                        <TextInput
                            placeholder="Details"
                            multiline={true}
                            onChangeText={text => this.setState({ details: text})}
                            defaultValue={this.props.details || ""} />
                    </View>
                </View>
            </View>
        );
    }
}