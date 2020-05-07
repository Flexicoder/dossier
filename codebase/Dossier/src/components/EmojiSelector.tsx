import React, { Component } from 'react';
import { Image, View, TouchableHighlight } from 'react-native';
import  styles  from '../assets/styles'
import images from '../assets/images';

export interface EmojiProps {
    src: any;
    value: number;
}

export interface EmojiOptionProps {
    selectedValues?: number[];
    multiSelection?: boolean;
    options: Array<EmojiProps>;
}

export interface EmojiOptionState {
    selectedValues: number[];
    multiSelection: boolean;
    options: Array<EmojiProps>;
}


export default class EmojiSelector extends Component<EmojiOptionProps, EmojiOptionState> {
    constructor(props: EmojiOptionProps) {
        super(props)
        this.state = { selectedValues: props.selectedValues || [],
                       multiSelection: props.multiSelection || false,
                       options: props.options }
    }

    toggleSymptom(value: number) {
        if (this.state.multiSelection) {
            if (this.state.selectedValues.includes(value)) {
                this.setState({ selectedValues: this.state.selectedValues.filter( selectedValue => (selectedValue != value )) })
            } else {
                this.setState( { selectedValues: [...this.state.selectedValues, value]})
            }
        } else {
            this.setState( { selectedValues: [value]})
        }
    }

    render() {
        return (
            <View style={styles.wrapLine}>
                {this.props.options.map(emoji => {
                    return (<View style={styles.emotContainer}  key={emoji.value+1000}>
                                <Image source={emoji.src}  style={styles.emoticon} key={emoji.value} /> 
                                <TouchableHighlight onPress={() => this.toggleSymptom(emoji.value)} key={emoji.value+10000} 
                                                    underlayColor='#e0e0e0' 
                                                    style={[styles.emoticonBorder, 
                                                            this.state.selectedValues.includes(emoji.value) ? styles.emoticonSelected 
                                                                                                            : styles.emoticonNotSelected]}>
                                    <Image source={images.empty} key={emoji.value+100}  style={styles.emoticonTransparentOverlay}/>
                                </TouchableHighlight>
                            </View>);
                })}
            </View>
        );
    }

}