import {StyleSheet} from 'react-native';
/* imports from within the module */
import Colors from 'constants/Colors';

export const mapStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  flex: {
    flex: 1,
  },
  overlay: {
    top: 0,
    position: 'absolute',
    width: '100%',
    justifyContent: 'flex-end',
    backgroundColor: Colors.cards,
  },
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  showInfoOverlay: {
    width: '95%',
    //height: '27%',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignSelf: 'center',
    backgroundColor: Colors.cards,
  },
  inputContainer: {
    width: '100%',
    justifyContent: 'center',
    backgroundColor: Colors.cards,
  },
  input: {
    width: '100%',
    padding: 15,
    paddingLeft: 20,
    borderTopWidth: 1,
    borderColor: Colors.text,
    fontSize: 14,
    color: Colors.text,
  },
  button: {
    backgroundColor: Colors.text,
    padding: 20,
  },
  icon: {
    padding: 15,
    fontSize: 28,
    color: Colors.text,
  },
  text: {
    color: Colors.text,
  },
  loading: {
    //position: 'absolute',
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
