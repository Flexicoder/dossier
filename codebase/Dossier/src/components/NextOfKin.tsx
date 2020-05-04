import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import  styles  from '../assets/styles'

interface NextOfKinProps {
    name?: string | null;
    relationship?: string | null;
    address?: string | null;
    contactNumber?: string | null;
    email?: string | null;
}

export default class NextOfKin extends Component<NextOfKinProps> {
    constructor(props: NextOfKinProps) {
        super(props)
        this.state = { name: props.name,
                       relationship: props.relationship,
                       address: props.address,
                       contactNumber: props.contactNumber,
                       email: props.email }
    }

    render() {
        return (
        <View style={styles.container}>
                <View style={styles.line}>
                    <View style={styles.textBox}>
                        <TextInput
                            placeholder="Name"
                            onChangeText={text => this.setState({ name: text})}
                            defaultValue={this.props.name || ""} />
                    </View>
                </View>
                <View style={styles.line}>
                    <View style={styles.textBox}>
                        <TextInput
                            placeholder="Relationship"
                            onChangeText={text => this.setState( { relationship: text })}
                            defaultValue={this.props.relationship || ""}
                            />
                    </View>
                </View>
                <View style={styles.line}>
                    <View style={styles.textBox}>
                        <TextInput
                            placeholder="Address"
                            onChangeText={text => this.setState( { address: text })}
                            defaultValue={this.props.address || ""}
                            />
                    </View>
                </View>
                <View style={styles.line}>
                    <View style={styles.textBox}>
                        <TextInput
                            placeholder="Contact Number"
                            onChangeText={text => this.setState( { contactNumber: text })}
                            defaultValue={this.props.contactNumber || ""}
                            />
                    </View>
                </View>
                <View style={styles.line}>
                    <View style={styles.textBox}>
                        <TextInput
                            placeholder="Email"
                            onChangeText={text => this.setState( { email: text })}
                            defaultValue={this.props.email || ""}
                            />
                    </View>
                </View>
            </View>
        );
    }
}