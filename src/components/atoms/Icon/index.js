import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Icon = props => {
  return (
    <View>
      <Image source={props.icon} style={styles.iconStyle} />
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({iconStyle: {height: 40, width: 40}});
