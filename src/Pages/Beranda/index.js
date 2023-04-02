import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconWithText from '../../components/molecules/IconwithTxt';
import RightSideBranda from '../../components/organisms/RightSideBranda';
import BottomSideBeranda from '../../components/organisms/BotomSideBranda';
import Konten from '../../components/organisms/conten';
import BottomNavigation from '../../components/organisms/BottomNavigation';

const BerandaPage = () => {
  return (
    <View style={(styles = {flex: 1})}>
      <Konten />
      <BottomNavigation />
      <Text>BerandaPage</Text>
      <RightSideBranda />
      <BottomSideBeranda
        user={'@rahmad_suryadi99'}
        deskripsi={'pemandangan belakang rumah uhuy'}
        tag={'#fyp'}
      />
    </View>
  );
};

export default BerandaPage;

const styles = StyleSheet.create({});
