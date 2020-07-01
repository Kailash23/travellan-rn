import React from 'react';
import {
  View,
  ScrollView,
  Text,
  ImageBackground,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
/** IMPORTS FROM WITHIN THE MODULE */
import {tripDetailScreenStyle as styles} from './TripDetailScreenStyle';

/** TRIP DETAIL SCREEN - displays details about each trip
 * TODO:
 * refactor repeating elements into reusable components */
const TripDetailScreen = (props) => {
  const tripId = props.route.params.tripId;
  const selectedTrip = useSelector((state) =>
    state.trips.availableTrips.find((item) => item.id === tripId),
  );

  const author = selectedTrip.image.authorName;
  const username = selectedTrip.image.username;
  const imageUrl = selectedTrip.image.imageUrl;
  const startDate = selectedTrip.startDate.split(' ').slice(1, 4).join(' ');
  const endDate = selectedTrip.endDate.split(' ').slice(1, 4).join(' ');

  return (
    <ScrollView style={styles.container}>
      <View>
        {/* IMAGE */}
        <ImageBackground style={styles.image} source={{uri: imageUrl}}>
          <LinearGradient
            colors={['rgba(0,0,0,0.00)', '#222222']}
            start={{x: 0.0, y: 0.0}}
            end={{x: 0.0, y: 1.0}}
            locations={[0.6, 1]}
            style={[{flex: 1}]}>
            <View style={styles.dateContainer}>
              {/* UNSPLASH ARTIST CREDITS */}
              <Text style={[styles.text]}>
                Photo by {author} @Unsplash/{username}
              </Text>
              {/* START DATE AND END DATE OF THE TRIP */}
              <Text style={[styles.text, styles.header, styles.date]}>
                {startDate === endDate ? (
                  <Text style={[styles.text, styles.date]}>{startDate}</Text>
                ) : (
                  <Text style={[styles.text, styles.date]}>
                    {startDate} - {endDate}
                  </Text>
                )}
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>

      <View>
        <View>
          <View // 1st row of functionalities buttons
            style={styles.justifyRow}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                props.navigation.navigate('Budget', {
                  tripId: selectedTrip.id,
                });
              }}>
              <Text style={styles.buttonText}>Budget</Text>
              <Icon
                name={Platform.OS === 'android' ? 'md-wallet' : 'ios-wallet'}
                size={42}
                color="#FFFFFF"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                props.navigation.navigate('Notes', {
                  tripId: selectedTrip.id,
                });
              }}>
              <Text style={styles.buttonText}>Notes</Text>
              <Icon
                name={Platform.OS === 'android' ? 'md-journal' : 'ios-journal'}
                size={42}
                color="#FFFFFF"
              />
            </TouchableOpacity>
          </View>

          <View // 2nd row of functionalities buttons
            style={styles.justifyRow}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                props.navigation.navigate('Transport', {
                  tripId: selectedTrip.id,
                });
              }}>
              <Text style={styles.buttonText}>Transport</Text>
              <Icon
                name={
                  Platform.OS === 'android'
                    ? 'md-paper-plane'
                    : 'ios-paper-plane'
                }
                size={42}
                color="#FFFFFF"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                props.navigation.navigate('Housing', {
                  tripId: selectedTrip.id,
                });
              }}>
              <Text style={styles.buttonText}>Housing</Text>
              <Icon
                name={Platform.OS === 'android' ? 'md-bed' : 'ios-bed'}
                size={42}
                color="#FFFFFF"
              />
            </TouchableOpacity>
          </View>

          <View // 3rd row of functionalities buttons
            style={styles.justifyRow}>
            <TouchableOpacity
              style={[styles.button, {width: '83.5%'}]}
              onPress={() => {
                props.navigation.navigate('Map', {tripId: selectedTrip.id});
              }}>
              <Text style={styles.buttonText}>Map</Text>
              <Icon
                name={Platform.OS === 'android' ? 'md-map' : 'ios-map'}
                size={42}
                color="#FFFFFF"
              />
            </TouchableOpacity>

            {/* <TouchableOpacity
              style={styles.button}
              onPress={() => {
                props.navigation.navigate('Weather', {
                  tripId: selectedTrip.id,
                });
              }}>
              <Text style={styles.buttonText}>Weather</Text>
              <Icon
                name={Platform.OS === 'android' ? 'md-cloudy' : 'ios-cloudy'}
                size={42}
                color="#FFFFFF"
              />
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

/** we export screenOptions to use in our Stack.Navigator
 * @param {*} navData: lets us use "navigation" prop from within this function */
export const tripDetailScreenOptions = (navData) => {
  return {
    headerTitle: navData.route.params.tripDestination,
  };
};

export default TripDetailScreen;
