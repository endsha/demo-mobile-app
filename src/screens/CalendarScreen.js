import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import NavigationService from '@utils/navigationService';

const CalendarScreen = () => {
  const goBackToHome = () => {
    NavigationService.goBack();
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => goBackToHome()}>
        <Text>CALENDAR SCREEN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CalendarScreen;
