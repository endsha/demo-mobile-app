import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DASHBOARD, CALENDAR } from '@constants/routes';
import NavigationService from '@utils/navigationService';

import DashboardScreen from '@screens/DashboardScreen';
import CalendarScreen from '@screens/CalendarScreen';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer
      ref={navigationRef =>
        NavigationService.setTopLevelNavigator(navigationRef)
      }
    >
      <Stack.Navigator initialRouteName={DASHBOARD}>
        <Stack.Screen name={DASHBOARD} component={DashboardScreen} />
        <Stack.Screen name={CALENDAR} component={CalendarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
