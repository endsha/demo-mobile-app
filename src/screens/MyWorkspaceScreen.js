import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NavigationService from '@utils/navigationService';
import Colors from '@constants/colors';
import Header from '@components/common/Header';
import ProjectSection from '@components/myWorkspace/ProjectSection';
import DocumentSection from '@components/myWorkspace/DocumentSection';

const MyWorkspaceScreen = () => {
  return (
    <View style={styles.myWorkspace}>
      <Header
        goBack={() => NavigationService.goBack()}
        topIcon="chevron-left"
      />
      <Text style={styles.screenTitle}>My Workspace</Text>
      <ScrollView contentContainerStyle={styles.content}>
        <ProjectSection />
        <DocumentSection />
      </ScrollView>
    </View>
  );
};

export default MyWorkspaceScreen;

const styles = StyleSheet.create({
  myWorkspace: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 24,
    marginTop: 12,
  },
  content: {
    paddingBottom: 48,
  },
});
