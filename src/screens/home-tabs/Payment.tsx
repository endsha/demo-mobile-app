import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const PaymentScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Payment Screen</Text>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
