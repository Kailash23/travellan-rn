'use strict';

import React, {useCallback, useState} from 'react';

import {
  View,
  //AppRegistry,
  //StyleSheet,
  Text,
  TouchableOpacity,
  //Linking,
  ActivityIndicator,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import QRCode from 'react-native-qrcode-svg';
//import code from 'react-native-aztec-qrcode';
//import {RNCamera} from 'react-native-camera';
import {AddQRStyle as styles} from './AddQRStyle';
import {useDispatch, useSelector} from 'react-redux';
import Colors from 'constants/Colors';

import * as transportActions from 'transport/state/Actions';

const AddQR = (props) => {
  const dispatch = useDispatch();

  const tripId = props.route.params.tripId;
  const ticketId = props.route.params.ticketId;
  const [QR, setQR] = useState('');
  const [showQRscanner, setshowQRscanner] = useState(true);
  // Loading check.
  const [isLoading, setIsLoading] = useState(false);

  const qrHandler = (e) => {
    //setIsLoading(true);
    setQR(e.data);
    //const qr = e.data;
    setshowQRscanner(false);
    setIsLoading(false);
  };

  const acceptHandler = async (e) => {
    setIsLoading(true);
    console.log(e.data);
    const qr = e.data;
    await dispatch(transportActions.updateTransport(tripId, ticketId, qr));
    props.navigation.navigate('Transport'),
      {
        tripId: tripId,
      };
    setIsLoading(false);
  };
  const redoHandler = () => {
    setshowQRscanner(true);
  }

  return (
    <View style={styles.container}>
      {showQRscanner && (
        <QRCodeScanner
          style={styles.centered}
          onRead={qrHandler}
          /**TO ADD FLASHLIGHT SWITCH BUTTON */
          //flashMode={RNCamera.Constants.FlashMode.torch}
          /** 
          topContent={
            <Text style={styles.centerText}>
              <Text style={styles.textBold}>{QR}</Text>
              {QR ? <QRCode value={QR} /> : null}
            </Text>
          }
          */
          bottomContent={
            <View style={styles.buttonContainer}>
              {isLoading ? (
                <ActivityIndicator size="small" color={Colors.white} />
              ) : (
                <TouchableOpacity style={styles.buttonTouchable}>
                  <Text style={styles.buttonText}>Track Ticket's QR-code</Text>
                </TouchableOpacity>
              )}
            </View>
          }
        />
      )}
      {!showQRscanner && (
        <View style={styles.container}>
          <QRCode style={styles.qrstyle} value={QR} size={300} logoSize={300} />
          <View style={styles.buttonContainerR}>
            <TouchableOpacity
              style={styles.buttonTouchable}
              onPress={acceptHandler}>
              <Text style={styles.buttonText}>That's my QR code</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonTouchable}
              onPress={redoHandler}>
              <Text style={styles.buttonText}>Try again</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default AddQR;
