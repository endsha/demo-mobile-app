import React, { useEffect } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { MainStackNavigationProp } from '@custom-types/navigation';
import { HOME_TABS } from '@constants/routes';

const Welcome = (): JSX.Element => {
  const navigation = useNavigation<MainStackNavigationProp>();

  useEffect(() => {
    goToHome();
  }, [])

  const goToHome = () => {
    setTimeout(() => {
      navigation.navigate(HOME_TABS);
    }, 3500);
  }

  return (
    <View style={styles.container}>
      <Text>Welcome Screen</Text>
    </View>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})