import React from 'react';
import {Platform} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/Ionicons';
//
import Colors from '../../Constants/Colors';

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Icon}
      iconSize={25}
      color={Platform.OS === 'android' ? '#FFFFFF' : Colors.primary}
    />
  );
};

export default CustomHeaderButton;
