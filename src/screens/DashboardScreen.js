import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { CALENDAR } from '@constants/routes';
import NavigationService from '@utils/navigationService';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Dashboard = () => {
  const navigateToCalender = () => {
    NavigationService.navigate(CALENDAR);
  };

  return (
    <SafeAreaView>
      <Text>DASHBOARD SCREEN</Text>
      <TouchableOpacity onPress={() => navigateToCalender()}>
        <Text>Navigate To Calendar</Text>
        <Icon name='cancel' size={24}/>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Dashboard;
