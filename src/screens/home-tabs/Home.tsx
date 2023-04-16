import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import HomeHeader from '@components/home/HomeHeader';
import SummaryCard from '@components/home/SummaryCard';
import HorizontalListSection from '@components/home/HorizontalListSection';

import Colors from '@constants/colors';
import Data from '@constants/data';

const HomeScreen = (): JSX.Element => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <HomeHeader />
      <SummaryCard />
      <HorizontalListSection
        title={'Petrol'}
        data={Data.petrol}
      />
      <HorizontalListSection
        title={'Rental Debate'}
        data={Data.rentalDebate}
      />
      <HorizontalListSection
        title={'Food and Beverage'}
        data={Data.foodAndBeverage}
      />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  contentContainer: {
    backgroundColor: Colors.white,
    paddingBottom: 16,
  },
});
