import Trip from 'trips/models/Trip';
import Map from 'map/models/Map';

import {fetchImage} from 'common/services/fetchImage';
import {fetchCoords} from 'common/services/fetchCoordinates';

export const DELETE_TRIP = 'DELETE_TRIP';
export const CREATE_TRIP = 'CREATE_TRIP';
export const SET_TRIPS = 'SET_TRIPS';

export const fetchTrips = () => {
  return async function (dispatch, getState) {
    const token = getState().auth.token;
    const userId = getState().auth.userId;

    const response = await fetch(
      `https://travellan-project.firebaseio.com/Trips/${userId}.json?auth=${token}`,
    );

    const resData = await response.json();
    const loadedTrips = [];

    for (const key in resData) {
      loadedTrips.push(
        new Trip(
          key,
          resData[key].destination,
          resData[key].region,
          resData[key].image,
          resData[key].startDate,
          resData[key].endDate,
          resData[key].budget,
          resData[key].notes,
          resData[key].transportInfo,
          resData[key].accommodationInfo,
          resData[key].map,
        ),
      );
    }
    dispatch({type: SET_TRIPS, trips: loadedTrips});
  };
};

export const deleteTrip = (tripId) => {
  return async function (dispatch, getState) {
    const token = getState().auth.token;
    const userId = getState().auth.userId;
    await fetch(
      `https://travellan-project.firebaseio.com/Trips/${userId}/${tripId}.json?auth=${token}`,
      {
        method: 'DELETE',
      },
    );
    dispatch({type: DELETE_TRIP, tripId});
  };
};

export const createTrip = (destination, startDate, endDate, budget) => {
  return async function (dispatch, getState) {
    const token = getState().auth.token;
    const userId = getState().auth.userId;
    let image = await fetchImage(destination);
    let location = await fetchCoords(destination);
    let region = {
      latitude: location.lat,
      longitude: location.lon,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    let notes = [];
    let transportInfo = [];
    let accommodationInfo = [];
    let map = new Map([], [], null);

    const response = await fetch(
      `https://travellan-project.firebaseio.com/Trips/${userId}.json?auth=${token}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          destination,
          region,
          image,
          startDate,
          endDate,
          budget,
          notes,
          transportInfo,
          accommodationInfo,
          map,
        }),
      },
    );

    const resData = await response.json();
    dispatch({
      type: CREATE_TRIP,
      tripData: {
        id: resData.name,
        destination,
        region,
        image,
        startDate,
        endDate,
        budget,
        notes,
        transportInfo,
        accommodationInfo,
        map,
      },
    });
  };
};
