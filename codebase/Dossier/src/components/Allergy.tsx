import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import  styles  from '../assets/styles'

interface AllergyProps {
    details?: string | null;
}

export default class Allergy extends Component<AllergyProps> {
    constructor(props: AllergyProps) {
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