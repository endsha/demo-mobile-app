import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Colors from '@constants/colors';
import Header from '@components/common/Header';
import TaskSection from '@components/dashboard/TaskSection';
import MyWorkspaceSection from '@components/dashboard/MyWorkspaceSection';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.dashboardContent}>
        <TaskSection />
        <MyWorkspaceSection />
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  dashboardContent: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 56,
  },
});
