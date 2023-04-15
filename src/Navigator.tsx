import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import HomeTabs from '@screens/home-tabs';
import Welcome from '@screens/Welcome';

import { HOME, WELCOME } from '@constants/routes';
import Colors from '@constants/colors';

const Stack = createNativeStackNavigator();

const Navigator = (): JSX.Element => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName={WELCOME}>
          <Stack.Screen
            name={WELCOME}
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeTabs"
            component={HomeTabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Navigator;
