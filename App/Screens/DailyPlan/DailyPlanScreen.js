import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
/**
 * IMPORTS FROM WITHIN THE MODULE
 */
import Colors from '../../Constants/Colors';

const DailyPlanScreen = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Text style={styles.text}>Daily plan</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: Colors.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.text,
  },
});

export default DailyPlanScreen;