import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from '../../components/atoms/Icon';

const BerandaPage = () => {
  return (
    <View>
      <Text>BerandaPage</Text>
      <View style={styles.containerBtmRight}>
        <View style={styles.profilStyle}>
          <View style={styles.plusBtnStyle}>
            <Text style={styles.textPlusStyle}>+</Text>
          </View>
        </View>
        <View style={{alignSelf: 'center'}}>
          <Icon icon={require('../../assets/icons/whitelove.png')} />
          <Icon icon={require('../../assets/icons/ChatBubble.png')} />
          <Icon icon={require('../../assets/icons/ForwardArrow.png')} />
        </View>
      </View>
    </View>
  );
};

export default BerandaPage;

const styles = StyleSheet.create({
  container: {flex: 1},
  containerBtmRight: {
    position: 'absolute',
    right: 0,
    top: 400,
    alignItems: 'flex-end',
    marginRight: 10,
    justifyContent: 'center',
    width: 50,
  },
  profilStyle: {
    height: 55,
    width: 55,
    borderRadius: 1000,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'blue',
    alignItems: 'center',
    marginBottom: 30,
  },
  plusBtnStyle: {
    height: 25,
    width: 25,
    borderRadius: 1000,
    backgroundColor: '#de3737',
    alignItems: 'center',
    top: 35,
  },
  textPlusStyle: {fontSize: 20, color: 'white'},
});
