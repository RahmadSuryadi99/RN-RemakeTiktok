import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from '../../atoms/Icon';

const IconWithText = props => {
  return (
    <View style={styles.container}>
      <Icon icon={props.icon} />
      <Text>{props.text}</Text>
    </View>
  );
};

export default IconWithText;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
  },
});
