import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const AccountScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Account Screen</Text>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
