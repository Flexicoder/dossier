
import 'react-native';
import React from 'react';
import EmojiSelector, * as emoji from '../../src/components/EmojiSelector';
import images from '../../src/assets/images'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("EmojiSelector", () => {
    it('renders correctly', () => {
        const theseOptions: emoji.EmojiProps[] = [
            {
              src: images.crazy_emoticon,
              value: 0
            },
            {
              src: images.disgusted_emoticon_1,
              value: 1
            }
        ]
        const emojiSelector = renderer.create(<EmojiSelector options={theseOptions} />);
        expect(emojiSelector.toJSON()).toMatchSnapshot();
      });
})
