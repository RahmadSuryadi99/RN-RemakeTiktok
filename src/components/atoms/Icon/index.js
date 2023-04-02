import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Icon = props => {
  return (
    <TouchableOpacity>
      <Image source={props.icon} style={styles.iconStyle} />
    </TouchableOpacity>
  );
};

export default Icon;

const styles = StyleSheet.create({
  iconStyle: {height: 40, width: 40, marginBottom: 5},
});
