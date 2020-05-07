import * as React from 'react';
import { Text, View, Image } from 'react-native';

import  images  from '../assets/images'
import  styles  from '../assets/styles'
import EmojiSelector, * as emoji from '../components/EmojiSelector';

const SymptomsPage = () => {

    const theseOptions: emoji.EmojiProps[] = [
        {
          src: images.crazy_emoticon,
          value: 0
        },
        {
          src: images.disgusted_emoticon_1,
          value: 1
        },
        {
          src: images.happy_poo_emoticon,
          value: 2
        },
        {
          src: images.huffish_emoticon,
          value: 3
        },
        {
          src: images.injured_emoticon,
          value: 4
        },
        {
          src: images.laugh_emoticon_1,
          value: 5
        },
        {
          src: images.nervous_emoticon_1,
          value: 6
        },
        {
          src: images.scared_emoticon,
          value: 7
        },
        {
          src: images.evil_stretch_tongue_emoticon,
          value: 8
        },
        {
          src: images.evil_stretch_tongue_emoticon,
          value: 9
        },
        {
          src: images.evil_stretch_tongue_emoticon,
          value: 10
        },
        {
          src: images.evil_stretch_tongue_emoticon,
          value: 11
        },
        {
          src: images.evil_stretch_tongue_emoticon,
          value: 12
        },
        {
          src: images.evil_stretch_tongue_emoticon,
          value: 13
        },
        {
          src: images.evil_stretch_tongue_emoticon,
          value: 14
        },
        {
          src: images.evil_stretch_tongue_emoticon,
          value: 15
        },
        {
          src: images.evil_stretch_tongue_emoticon,
          value: 16
        }
    ]

    return (
      <View style={styles.container}>
        <Text>Single Symptoms</Text>
        <EmojiSelector options={theseOptions} />
        <Text>Multiple Symptoms</Text>
        <EmojiSelector options={theseOptions} multiSelection={true} />
      </View>
    );
  };

  export default SymptomsPage;