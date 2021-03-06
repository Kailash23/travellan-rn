import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  Platform,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
/** IMPORTS FROM WITHIN THE MODULE */
import Card from 'components/card/Card';
import ReadMore from 'components/readMore/ReadMore';
import {accommodationItemStyle as styles} from './AccommodationItemStyle';
import Colors from 'constants/Colors';

const imageUrl =
  'https://images.unsplash.com/photo-1541971875076-8f970d573be6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80';

/** Accommodation item component used in AccommodationScreen for reservations listing
 * TODO:
 * refactor icons for better touchable response and clickability
 * refactor action bar
 * refactor inline styles
 */
const AccommodationItem = (props) => {
  /** HANDLERS */
  const prepareFacilities = (facilitiesArray) => {
    let result = [];

    if (facilitiesArray === undefined) {
      console.log('error');
    } else {
      result = facilitiesArray.map((element) => Object.values(element)[0]);
    }

    return result;
  };

  let facilities = prepareFacilities(props.facilities);

  return (
    <Card style={styles.accommodation}>
      <View style={styles.actions}>
        <TouchableOpacity onPress={props.deleteAccommodationHandler}>
          <Ionicon
            name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
            style={styles.icon}
          />
        </TouchableOpacity>

        {/* EDIT RESERVATION INFO
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Edit reservation');
          }}>
          <Icon name="md-brush" style={styles.icon} />
        </TouchableOpacity>

        SHOW ON MAP
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Show on map');
          }}>
          <Icon name="md-map" style={styles.icon} />
        </TouchableOpacity> */}
      </View>

      <ScrollView style={{marginTop: 10}} indicatorStyle={'white'}>
        <View>
          {/* IMAGE BACKGROUND WITH GRADIENT, NAME
          refactor uri to be the picture of the accommodation */}
          <ImageBackground
            style={styles.image}
            source={{
              uri: imageUrl,
            }}>
            <LinearGradient
              colors={['rgba(0,0,0,0.00)', Colors.cards]}
              start={{x: 0.0, y: 0.0}}
              end={{x: 0.0, y: 1.0}}
              locations={[0.4, 1]}
              style={[{flex: 1}]}>
              <View style={styles.headerOverImg}>
                <Text style={[styles.text, styles.header]}>{props.name}</Text>
              </View>
            </LinearGradient>
          </ImageBackground>

          <View style={styles.container}>
            {/* ADDRESS */}
            <View>
              <Text style={[styles.text, styles.subtitle]}>
                {props.address}
              </Text>
            </View>

            {/* BENEFITS */}
            <View style={{marginTop: '7%'}}>
              <Text style={[styles.text, styles.h2]}>Amenities</Text>
              <View style={styles.benefitsContainer}>
                {/* PARKING */}
                <MaterialCommunityIcon
                  style={[
                    styles.benefitIcon,
                    {
                      color: facilities.includes('parking')
                        ? Colors.primary
                        : '#636363',
                    },
                  ]}
                  name={'parking'}
                />
                {/* SWIMMING POOLS */}
                <MaterialCommunityIcon
                  style={[
                    styles.benefitIcon,
                    {
                      color: facilities.includes('swimming pool')
                        ? Colors.primary
                        : '#636363',
                    },
                  ]}
                  name={'swim'}
                />
                {/* PETS */}
                <MaterialIcon
                  style={[
                    styles.benefitIcon,
                    {
                      color: facilities.includes('pets allowed')
                        ? Colors.primary
                        : '#636363',
                    },
                  ]}
                  name={'pets'}
                />
                {/* SPA */}
                <MaterialIcon
                  style={[
                    styles.benefitIcon,
                    {
                      color: facilities.includes('spa')
                        ? Colors.primary
                        : '#636363',
                    },
                  ]}
                  name={'spa'}
                />
                {/* WIFI */}
                <MaterialIcon
                  style={[
                    styles.benefitIcon,
                    {
                      color: facilities.includes('wifi in rooms')
                        ? Colors.primary
                        : '#636363',
                    },
                  ]}
                  name={'wifi'}
                />
                {/* BAR */}
                <MaterialIcon
                  style={[
                    styles.benefitIcon,
                    {
                      color: facilities.includes('bar')
                        ? Colors.primary
                        : '#636363',
                    },
                  ]}
                  name={'local-bar'}
                />
              </View>
            </View>

            {/* HOTEL HOURS */}
            <View style={{marginTop: '7%'}}>
              <Text style={[styles.text, styles.h2]}>Hotel hours</Text>
              <Text style={[styles.text]}>{props.hotelHours}</Text>
            </View>

            {/* DESCRIPTION */}
            <View style={{marginTop: '7%'}}>
              <Text style={[styles.text, styles.h2]}>Description</Text>
              <View style={[styles.textAlign]}>
                <ReadMore longText={props.description} />
              </View>
            </View>

            {/* RESERVATION INFO */}
            <View style={{marginTop: '1%'}}>
              <Text style={[styles.text, styles.h2]}>Reservation info</Text>
              <Text style={[styles.text]}>
                {props.reservationDetails.length === 0
                  ? 'No details'
                  : props.reservationDetails}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </Card>
  );
};

export default AccommodationItem;
