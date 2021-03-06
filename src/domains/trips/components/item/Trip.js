import React from 'react';
import {View, Text, Image, TouchableOpacity, Platform} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
/** IMPORTS FROM WITHIN THE MODULE */
import Card from 'components/card/Card';
import {tripStyle as styles} from './TripStyle';

/** Trip item component used in TripsOverview for trips listing */
const Trip = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version > 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <Card style={styles.tripCard}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onSelect} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{uri: props.image.imageUrl}}
              />
            </View>
            <View style={styles.alignRow}>
              <View style={styles.details}>
                <Text style={[styles.text, styles.destination]}>
                  {props.destination}
                </Text>
                {props.startDate === props.endDate ? (
                  <Text style={[styles.text, styles.date]}>
                    {props.startDate}
                  </Text>
                ) : (
                  <Text style={[styles.text, styles.date]}>
                    {props.startDate} - {props.endDate}
                  </Text>
                )}
              </View>
            </View>
          </View>
        </TouchableCmp>
        <View style={styles.actions}>{props.children}</View>
      </View>
    </Card>
  );
};

export default Trip;
