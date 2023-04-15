import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const HomeScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

