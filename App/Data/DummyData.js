import Trip from '../Models/TripModel';

/**
 * Dummy trips
 *  [int]               id,
    [int]               ownerId,
    [string]            destination,
    [string]            imageUrl,
    [date]              startDate,
    [date]              endDate
    [float]             budget,
    [list of strings]   notes,
    [dict]              transportInfo,
    [dict]              accommodationInfo,
    [dict of dict]      pointsOfInterest
 *
 */

const TRIPS = [
  // trip1
  new Trip(
    1,
    1,
    'Barcelona',
    {
      latitude: 41.385063,
      longitude: 2.173404,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    'https://images.unsplash.com/photo-1562883676-8c7feb83f09b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=661&q=80',
    '2021-1-21',
    '2021-1-25',
    2000.5,
    [
      {id: 1, title: 'Hello, World!', body: 'Lalala, going to Barcelona!'},
      {id: 2, title: 'Pack', body: 'bathing suit, umbrella, lots of suncream'},
      {id: 3, title: 'Things to see', body: 'Lalala, going to Barcelona!'},
    ],
    {},
    {},
    [{}, {}, {}, {}],
  ),
  // trip2
  new Trip(
    2,
    1,
    'Paris',
    {
      latitude: 48.864716,
      longitude: 2.349014,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80',
    '2021-2-13',
    '2021-2-15',
    1450.5,
    [
      {id: 1, title: 'Hello, World!', body: 'Lalala, going to Paris!'},
      {id: 2, title: 'Hello, World!', body: 'Lalala, going to Barcelona!'},
    ],
    {},
    {},
    [{}, {}, {}, {}],
  ),
  // trip3
  new Trip(
    3,
    1,
    'Tokyo',
    {
      latitude: 35.689487,
      longitude: 139.691711,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
    '2021-4-10',
    '2021-4-21',
    3420.0,
    [
      {id: 1, title: 'Hello, World!', body: 'Lalala, going to Tokyo!'},
      {id: 2, title: 'Hello, World!', body: 'Lalala, going to Barcelona!'},
      {id: 3, title: 'Hello, World!', body: 'Lalala, going to Barcelona!'},
      {id: 4, title: 'Hello, World!', body: 'Lalala, going to Barcelona!'},
    ],
    {},
    {},
    [{}, {}, {}, {}],
  ),
  // trip4
  new Trip(
    4,
    1,
    'Warsaw',
    {
      latitude: 52.229675,
      longitude: 21.01223,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    'https://images.unsplash.com/photo-1519197924294-4ba991a11128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
    '2021-8-27',
    '2021-8-30',
    1505.75,
    [{id: 1, title: 'Hello, World!', body: 'Lalala, going to Warsaw!'}],
    {},
    {},
    [{}, {}, {}, {}],
  ),
  // trip5
  new Trip(
    5,
    1,
    'Milan',
    {
      latitude: 45.464203,
      longitude: 9.189982,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    'https://images.unsplash.com/photo-1520440229-6469a149ac59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
    '2021-11-12',
    '2021-11-20',
    600.0,
    [
      {id: 1, title: 'Hello, World!', body: 'Lalala, going to Barcelona!'},
      {id: 2, title: 'Hello, World!', body: 'Lalala, going to Barcelona!'},
      {id: 3, title: 'Hello, World!', body: 'Lalala, going to Barcelona!'},
    ],
    {},
    {},
    [{}, {}, {}, {}],
  ),
];

export default TRIPS;
