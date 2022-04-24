import React, { useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DASHBOARD, CALENDAR, MY_WORKSPACE } from '@constants/routes';
import NavigationService from '@utils/navigationService';

import AuthService from '@services/authService';

import DashboardScreen from '@screens/DashboardScreen';
import CalendarScreen from '@screens/CalendarScreen';
import MyWorkspaceScreen from '@screens/MyWorkspaceScreen';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  useEffect(() => {
    const signIn = async () => {
      await AuthService.signIn();
    };
    
    signIn();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer
        ref={navigationRef =>
          NavigationService.setTopLevelNavigator(navigationRef)
        }
      >
        <Stack.Navigator initialRouteName={DASHBOARD}>
          <Stack.Screen
            name={DASHBOARD}
            component={DashboardScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={CALENDAR}
            component={CalendarScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={MY_WORKSPACE}
            component={MyWorkspaceScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Navigator;
