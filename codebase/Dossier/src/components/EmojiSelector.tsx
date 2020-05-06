import React, { Component } from 'react';
import { Image, View } from 'react-native';
import  styles  from '../assets/styles'
import images from '../assets/images';

export interface EmojiProps {
    src: any;
    value: number;
}

export interface EmojiOptionProps {
    selectedValues: number[];
    multiSelection?: boolean | false;
    options: Array<EmojiProps>;
}


export default class EmojiSelector extends Component<EmojiOptionProps> {
    constructor(props: EmojiOptionProps) {
        super(props)
        this.state = { selectedValues: props.selectedValues,
                       multiSelection: props.multiSelection,
                       options: props.options }
    }

    render() {
        return (
            <View style={styles.wrapLine}>
                {this.props.options.map(emoji => {
                    return (<View style={styles.emotContainer}>
                                <Image source={emoji.src}  style={styles.emoticon} key={emoji.value} /> 
                                <Image source={images.empty} style={[styles.emoticonBorder, 
                                    this.props.selectedValues.includes(emoji.value) ? styles.emoticonSelected 
                                                                                    : styles.emoticonNotSelected]} />
                            </View>);
                })}
            </View>
        );
    }

}