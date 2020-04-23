import React, { Component, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import  styles  from '../assets/styles'

interface HospitalNumberProps {
    number: string;
    name: string;
}

export default class HospitalNumber extends Component<HospitalNumberProps> {
    constructor(props: HospitalNumberProps) {
        super(props)
        this.state = { number: "", name: "" }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.line}>
                    <View style={styles.textBox}>
                    <TextInput
                        placeholder="Hospital Number"
                        onChangeText={text => this.setState({ number: text})}
                        defaultValue={this.props.number} />
                    </View>
                    <View style={styles.textBox}>
                    <TextInput
                        placeholder="Hospital Name"
                        onChangeText={text => this.setState( { name: text })}
                        defaultValue={this.props.name}
                        />
                    </View>
                </View>
            </View>
        );
    }

}

// const HospitalNumber = () => {
//     const [hospitalNumber, setHosiptalNumber] = useState('');
//     const [hospitalName, setHosiptalName] = useState('');
//     return (
//         <View style={styles.container}>
//             <View style={styles.line}>
//                 <View style={styles.textBox}>
//                 <TextInput
//             placeholder="Hospital Number"
//             onChangeText={hospitalNumber => setHosiptalNumber(hospitalNumber)}
//             defaultValue={hospitalNumber} />
//                 </View>
//                 <View style={styles.textBox}>
//                 <TextInput
//             placeholder="Hospital Name"
//             onChangeText={hospitalName => setHosiptalName(hospitalName)}
//             defaultValue={hospitalName}
//              />
//                 </View>
//             </View>
//         </View>
//     );
//   };

//   export default HospitalNumber;