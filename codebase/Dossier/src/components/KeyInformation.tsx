import React, { Component } from 'react';
import { Text, TextInput, View, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import  styles  from '../assets/styles'

interface KeyInformationProps {
    name: string;
    preferredName?: string | null;
    dateOfBirth?: Date;
    address?: string | null;
    contactNumber?: string | null;
    email?: string | null;
    nhsNumber?: string | null;
    onKeyInfoChange: any
}

export default class KeyInformation extends Component<KeyInformationProps> {
    constructor(props: KeyInformationProps) {
        super(props)
        this.state = { name: props.name,
                       preferredName: props.preferredName,
                       dateOfBirth: props.dateOfBirth || new Date(),
                       address: props.address,
                       contactNumber: props.contactNumber,
                       email: props.email,
                       nhsNumber: props.nhsNumber }

        this.onTextChange = this.onTextChange.bind(this)
    }

    onTextChange(propertyName, value) {
        this.props.onKeyInfoChange(propertyName, value);
    }

    onChange = (event: any, selectedDate: Date | null | undefined) => {
        const currentDate = selectedDate || this.props.dateOfBirth;
        this.onTextChange('dateOfBirth', currentDate);
      };

    render() {
        return (
        <View >
                <View style={styles.line}>
                    <View style={styles.textBox}>
                        <TextInput
                            placeholder="Your Name"
                            onChangeText={text => this.onTextChange('name', text)}
                            defaultValue={this.props.name} />
                    </View>
                </View>
                <View style={styles.line}>
                    <View style={styles.textBox}>
                        <TextInput
                            placeholder="Preferred Name"
                            onChangeText={text => this.onTextChange('preferredName', text)}
                            defaultValue={this.props.preferredName || ""}
                            />
                    </View>
                </View>

                <Text>Date Of Birth</Text>
                <DateTimePicker
                    value={this.props.dateOfBirth}
                    onChange={this.onChange}
                    />

                <View style={styles.line}>
                    <View style={styles.textBox}>
                        <TextInput
                            placeholder="Address"
                            onChangeText={text => this.onTextChange('address', text)}
                            defaultValue={this.props.address || ""}
                            />
                    </View>
                </View>
                <View style={styles.line}>
                    <View style={styles.textBox}>
                        <TextInput
                            placeholder="Contact Number"
                            onChangeText={text => this.onTextChange('contactNumber', text )}
                            defaultValue={this.props.contactNumber || ""}
                            />
                    </View>
                </View>
                <View style={styles.line}>
                    <View style={styles.textBox}>
                        <TextInput
                            placeholder="Email"
                            onChangeText={text => this.onTextChange('email', text )}
                            defaultValue={this.props.email || ""}
                            />
                    </View>
                </View>
                <View style={styles.line}>
                    <View style={styles.textBox}>
                        <TextInput
                            placeholder="NHS Number"
                            onChangeText={text => this.onTextChange( 'nhsNumber', text )}
                            defaultValue={this.props.nhsNumber || ""}
                            />
                    </View>
                </View>
            </View>
        );
    }
}