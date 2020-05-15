import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

/** SCREENS */
/** TRIP OVERVIEW SCREEN */
import TripsOverviewScreen, {
  tripsScreenOptions,
} from '../Screens/MyTrips/TripsOverviewScreen';
/** TRIP DETAIL SCREEN */
import TripDetailScreen, {
  tripDetailScreenOptions,
} from '../Screens/MyTrips/TripDetailScreen';
/** 'CREATE A NEW TRIP' SCREEN */
import NewTripScreen from '../Screens/MyTrips/NewTripScreen';
/** TRANSPORT SCREENS */
import TransportScreen, {
  transportScreenOptions,
} from '../Screens/Transport/TransportScreen';
/** ACCOMMODATION SCREENS */
import AccommodationScreen, {
  accommodationScreenOptions,
} from '../Screens/Accommodation/AccommodationScreen';
import AddAccommodationScreen from '../Screens/Accommodation/AddAccommodationScreen';
/** MAP SCREEN */
import MapScreen from '../Screens/Map/MapScreen';
/** WEATHER SCREEN */
import WeatherScreen from '../Screens/Weather/WeatherScreen';
/** BUDGET SCREEN */
import BudgetScreen from '../Screens/Budget/BudgetScreen';
/** NOTES SCREENS */
import NotesScreen from '../Screens/Notes/NotesScreen';
import AddNote from '../Screens/Notes/AddNoteScreen';
/** CONSTANTS */
import Colors from '../Constants/Colors';

/** STACK NAVIGATOR */
const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultNavOptions}>
        <Stack.Screen
          name="My trips"
          component={TripsOverviewScreen}
          options={tripsScreenOptions}
        />
        <Stack.Screen name="Create a trip" component={NewTripScreen} />
        <Stack.Screen
          name="Details"
          component={TripDetailScreen}
          options={tripDetailScreenOptions}
        />
        <Stack.Screen
          name="Transport"
          component={TransportScreen}
          options={transportScreenOptions}
        />
        <Stack.Screen
          name="Housing"
          component={AccommodationScreen}
          options={accommodationScreenOptions}
        />
        <Stack.Screen
          name="Add accommodation"
          component={AddAccommodationScreen}
        />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
        <Stack.Screen name="Budget" component={BudgetScreen} />
        <Stack.Screen name="Notes" component={NotesScreen} />
        <Stack.Screen name="Add Note" component={AddNote} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/** DEFAULT NAVIGATION OPTIONS */
const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTintColor: Colors.text,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
