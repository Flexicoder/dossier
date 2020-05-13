import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import  styles  from '../assets/styles'
import * as Constants from '../assets/constants'

interface IHospitalNumberComponent {
    data: IHospitalNumberProps
    onTextChange: any
}

interface IHospitalNumberProps {
    _id: string,
    number: string;
    name: string;
}

export default class HospitalNumber extends Component<IHospitalNumberProps> {
    constructor(props: IHospitalNumberProps) {
        super(props)
        this.onTextChange = this.onTextChange.bind(this)
    }

    onTextChange(propertyName, value) {
        this.props.onTextChange(Constants.HOSPITAL_NUMBER, propertyName, value);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.line}>
                    <View style={styles.textBox}>
                    <TextInput
                        placeholder="Hospital Number"
                        onChangeText={text => this.onTextChange('number', text)}
                        defaultValue={this.props.data.number} />
                    </View>
                    <View style={styles.textBox}>
                    <TextInput
                        placeholder="Hospital Name"
                        onChangeText={text => this.onTextChange('name', text)}
                        defaultValue={this.props.data.name}
                        />
                    </View>
                </View>
            </View>
        );
    }
}