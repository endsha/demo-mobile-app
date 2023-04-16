import React from "react";
import {View, StyleSheet, Text} from 'react-native';

const NotificationScreen = () => {
  // Sample screen of notification
  return (
    <View style={styles.container}>
      <Text>Notification Screen</Text>
    </View>
  );
}

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
