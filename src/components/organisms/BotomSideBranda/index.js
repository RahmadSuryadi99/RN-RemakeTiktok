import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BottomSideBeranda = props => {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: 17}}>{props.user}</Text>
      <Text style={{fontWeight: '400', fontSize: 15}}>{props.deskripsi}</Text>
      <Text style={{fontWeight: '400', fontSize: 15}}>{props.tag}</Text>
      <View style={{flexDirection: 'row', paddingTop: 10}}>
        <Image
          source={require('../../../assets/icons/musik.png')}
          style={{height: 20, width: 20}}
        />
        <Text style={{marginLeft: 10, fontWeight: '400', fontSize: 15}}>
          ayo goyang dumang - budi
        </Text>
      </View>
    </View>
  );
};

export default BottomSideBeranda;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 620,
    flex: 1,
    justifyContent: 'flex-end',
    marginLeft: 13,
  },
});
