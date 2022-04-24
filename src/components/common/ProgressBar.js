import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '@constants/colors';

const ProgressBar = (props) => {
  return (
    <View style={[styles.progressBarBackground, props.style]}>
      <View style={{...styles.progress, width: `${props.percentage}%`}}/>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  progressBarBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    height: 4,
    borderRadius: 4,
  },
  progress: {
    backgroundColor: Colors.progressBar,
    height: 4,
    borderRadius: 4,
  },
});
