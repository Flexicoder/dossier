import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../assets/styles'
import * as Constants from '../assets/constants'

interface IKeyInformationComponent {
    data: IKeyInformationProps
    onTextChange: any
}

interface IKeyInformationProps {
    name: string;
    preferredName?: string | null;
    dateOfBirth?: Date;
    address?: string | null;
    contactNumber?: string | null;
    email?: string | null;
    nhsNumber?: string | null;

}

export default class KeyInformation extends Component<IKeyInformationComponent> {
    constructor(props: IKeyInformationComponent) {
        super(props)
        this.onTextChange = this.onTextChange.bind(this)
    }

    onTextChange(propertyName, value) {
        this.props.onTextChange(Constants.KEY_INFORMATION, propertyName, value);
    }

    onChange = (event: any, selectedDate: Date | null | undefined) => {
        const currentDate = selectedDate || this.props.data.dateOfBirth;
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
                            defaultValue={this.props.data.name} />
                    </View>
                </View>
                <View style={styles.line}>
                    <View style={styles.textBox}>
                        <TextInput
                            placeholder="Preferred Name"
                            onChangeText={text => this.onTextChange('preferredName', text)}
                            defaultValue={this.props.data.preferredName || ""}
                        />
                    </View>
                </View>

                <Text>Date Of Birth</Text>
                <DateTimePicker
                    value={this.props.data.dateOfBirth}
                    onChange={this.onChange}
                />

                <View style={styles.line}>
                    <View style={styles.textBox}>
                        <TextInput
                            placeholder="Address"
                            onChangeText={text => this.onTextChange('address', text)}
                            defaultValue={this.props.data.address || ""}
                        />
                    </View>
                </View>
                <View style={styles.line}>
                    <View style={styles.textBox}>
                        <TextInput
                            placeholder="Contact Number"
                            onChangeText={text => this.onTextChange('contactNumber', text)}
                            defaultValue={this.props.data.contactNumber || ""}
                        />
                    </View>
                </View>
                <View style={styles.line}>
                    <View style={styles.textBox}>
                        <TextInput
                            placeholder="Email"
                            onChangeText={text => this.onTextChange('email', text)}
                            defaultValue={this.props.data.email || ""}
                        />
                    </View>
                </View>
                <View style={styles.line}>
                    <View style={styles.textBox}>
                        <TextInput
                            placeholder="NHS Number"
                            onChangeText={text => this.onTextChange('nhsNumber', text)}
                            defaultValue={this.props.data.nhsNumber || ""}
                        />
                    </View>
                </View>
            </View>
        );
    }
}