import {StyleSheet} from 'react-native';
/* imports from within the module */
import Colors from 'constants/Colors';

export const cardStyle = StyleSheet.create({
  card: {
    backgroundColor: Colors.cards,
    borderRadius: 10,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.3,
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 8,
    elevation: 5,
  },
});
