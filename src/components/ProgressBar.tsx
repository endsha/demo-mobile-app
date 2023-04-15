import Colors from '@constants/colors';
import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

type ProgressBarProps = {
  style: ViewStyle,
  progress: number;
}

const ProgressBar = (props: ProgressBarProps) => {
  const { progress, style } = props;
  
  return (
    <View style={[styles.progressBarContainer, style]}>
      <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    width: '100%',
    height: 5,
    backgroundColor: Colors.grey07,
    borderRadius: 2.5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: Colors.blueDark,
    borderRadius: 2.5,
  },
});

export default ProgressBar;
