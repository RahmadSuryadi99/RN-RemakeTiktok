import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import IconWithText from '../../molecules/IconwithTxt';

const RightSideBranda = () => {
  return (
    <View style={styles.containerBtmRight}>
      <View style={styles.profilStyle}>
        <Image
          source={require('../../../assets/images/gambar1.jpg')}
          style={{height: 51, width: 51, borderRadius: 1000}}
        />
        <TouchableOpacity style={styles.plusBtnStyle}>
          <Text style={styles.textPlusStyle}>+</Text>
        </TouchableOpacity>
      </View>
      <IconWithText
        icon={require('../../../assets/icons/whitelove.png')}
        text={'0'}
      />
      <IconWithText
        icon={require('../../../assets/icons/ChatBubble.png')}
        text={'0'}
      />
      <IconWithText
        icon={require('../../../assets/icons/ForwardArrow.png')}
        text={'0'}
      />
    </View>
  );
};

export default RightSideBranda;

const styles = StyleSheet.create({
  container: {flex: 1},
  containerBtmRight: {
    position: 'absolute',
    right: 0,
    top: 350,
    alignItems: 'flex-end',
    marginRight: 10,
    justifyContent: 'center',
  },
  profilStyle: {
    height: 55,
    width: 55,
    borderRadius: 1000,
    borderWidth: 2,
    borderColor: '#c7c7c7',
    backgroundColor: 'blue',
    alignItems: 'center',
    marginBottom: 30,
  },
  plusBtnStyle: {
    position: 'absolute',
    height: 25,
    width: 25,
    borderRadius: 1000,
    backgroundColor: '#de3737',
    alignItems: 'center',
    top: 35,
  },
  textPlusStyle: {fontSize: 20, color: 'white'},
});
