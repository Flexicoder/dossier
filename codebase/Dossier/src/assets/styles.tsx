
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1
      },
      scrollview: {
        flexGrow: 1,
      },
      scrollContent: {
        flexGrow: 1,
        justifyContent: "space-between",
        padding: 10,
      },
    container: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1
    },
    line: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 5
    },
    wrapLine: {
      flexDirection: 'row',
      flexWrap: 'wrap'
  },
    textBox: {
        color: 'grey',
        fontSize: 18,
        flexGrow: 1,
        alignItems: 'flex-start',
        borderColor: 'lightgrey',
        borderWidth: 1,
        padding: 5,
        margin: 5

    },
    emotContainer: {
      alignItems: 'center'
    },
    emoticon: {
      width: 30,
      height: 30,
      resizeMode: 'contain',
      margin:9 },

    emoticonBorder: {
      width: 38,
      height: 38,
      resizeMode: 'contain',
      borderWidth: 2,
      borderRadius: 30,
      margin:5, 
      position: 'absolute'
    },
    emoticonSelected: {
      borderColor: 'red',
    },
    emoticonNotSelected: {
      borderColor: '#d0d0d0',
    }
})

export default styles