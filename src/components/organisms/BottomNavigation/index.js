import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from '../../atoms/Icon';
import IconWithText from '../../molecules/IconwithTxt';

const BottomNavigation = () => {
  return (
    <View style={styles.container}>
      <IconText
        icon={require('../../../assets/icons/HomePage.png')}
        namaIcon={'Beranda'}
      />
      <IconText
        icon={require('../../../assets/icons/Search.png')}
        namaIcon={'Cari'}
      />
      <View style={[styles.wrappBtn, {marginBottom: 18}]}>
        <View>
          <Image
            source={require('../../../assets/icons/BtnAdd.png')}
            resizeMode={'center'}
            style={{height: 30, width: 45, borderRadius: 10}}
          />
        </View>
      </View>
      <IconText
        icon={require('../../../assets/icons/SMS.png')}
        namaIcon={'Pesan'}
      />
      <IconText
        icon={require('../../../assets/icons/User.png')}
        namaIcon={'User'}
      />
    </View>
  );
};

const IconText = props => {
  return (
    <TouchableOpacity style={styles.wrappBtn}>
      <Image source={props.icon} style={styles.iconStyle} />
      <Text style={styles.textStyle}>{props.namaIcon}</Text>
    </TouchableOpacity>
  );
};
export default BottomNavigation;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    backgroundColor: 'black',
    position: 'absolute',
    top: 735,
    flexDirection: 'row',
  },
  wrappBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {height: 30, width: 25},
  textStyle: {fontSize: 10},
});
