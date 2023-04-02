import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Konten = () => {
  return (
    <View style={{flex: 1, position: 'absolute'}}>
      <Image source={require('../../../assets/images/gambar1.jpg')} />
    </View>
  );
};

export default Konten;

const styles = StyleSheet.create({});
