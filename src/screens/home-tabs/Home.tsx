import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import Colors from '@constants/colors';
import HomeHeader from '@components/home/HomeHeader';

const HomeScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <HomeHeader />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

