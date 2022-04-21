import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { CALENDAR } from '@constants/routes';
import NavigationService from '@utils/navigationService';

const Dashboard = () => {
  const navigateToCalender = () => {
    NavigationService.navigate(CALENDAR);
  };

  return (
    <SafeAreaView>
      <Text>DASHBOARD SCREEN</Text>
      <TouchableOpacity onPress={() => navigateToCalender()}>
        <Text>Navigate To Calendar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Dashboard;
