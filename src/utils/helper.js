import {Platform, StatusBar} from 'react-native';
import {hasNotch} from 'react-native-device-info';

export const getStatusBarHeight = () => {
  // iOS status bar height
  if (Platform.OS === 'ios') {
    if (hasNotch()) {
      return 44;
    }
    return 20;
  }
  // Android status bar height
  return StatusBar.currentHeight;
}