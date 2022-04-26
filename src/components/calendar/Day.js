import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Hours, HourHeight } from '@constants/data';
import Colors from '@constants/colors';

const Day = () => {
  return (
    <View style={styles.dayContainer}>
      {Hours.map((hour, index) => (
        <View style={styles.hourContainer} key={`hour-${index}`}>
          {hour !== 24 ? (
            <Text>
              {hour > 12 ? hour % 12 : hour} {hour > 12 ? 'PM' : 'AM'}
            </Text>
          ) : (
            <Text>0 AM</Text>
          )}
        </View>
      ))}
    </View>
  );
};

export default Day;

const styles = StyleSheet.create({
  dayContainer: {
    flexDirection: 'column',
    paddingHorizontal: 24,
    backgroundColor: Colors.backgroundColor,
    alignItems: 'flex-start',
  },
  hourContainer: {
    height: HourHeight,
    alignItems: 'center',
  },
});
