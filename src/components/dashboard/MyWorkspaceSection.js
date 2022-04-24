import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Projects } from '@constants/data';
import { MY_WORKSPACE } from '@constants/routes';
import NavigationService from '@utils/navigationService';
import Colors from '@constants/colors';

const DashboardProjectCard = props => {
  return (
    <View style={{ ...styles.projectCard, backgroundColor: props.color }}>
      <AnimatedCircularProgress
        size={80}
        width={6}
        fill={props.percentage}
        rotation={0}
        tintColor="white"
        lineCap="round"
        onAnimationComplete={() => console.log('onAnimationComplete')}
        backgroundColor="rgba(255, 255, 255, 0.2)"
        children={() => (
          <Text style={styles.progressText}>{props.percentage}%</Text>
        )}
      />
      <View style={styles.cardInfoContainer}>
        <Text style={styles.projectName}>{props.name}</Text>
        <Text style={styles.projectProgress}>
          {props.progressHours} hours progress
        </Text>
      </View>
    </View>
  );
};

const MyWorkspaceSection = () => {
  const toMyWorkspaceScreen = () => {
    NavigationService.navigate(MY_WORKSPACE);
  };

  return (
    <View style={styles.myWorkspaceSection}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>My Work Space</Text>
        <TouchableOpacity
          style={styles.viewMoreButton}
          onPress={() => toMyWorkspaceScreen()}
        >
          <Text style={styles.viewMoreBtnText}>View more</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.projects}>
        {Projects.map(project => (
          <DashboardProjectCard
            key={project.id}
            name={project.name}
            percentage={project.percentage}
            progressHours={project.progressHours}
            color={project.color}
          />
        ))}
      </View>
    </View>
  );
};

export default MyWorkspaceSection;

const styles = StyleSheet.create({
  myWorkspaceSection: {
    marginTop: 32,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  viewMoreButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 32,
    backgroundColor: Colors.primaryButtonColor,
  },
  viewMoreBtnText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '400',
  },
  projects: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  projectCard: {
    padding: 24,
    borderRadius: 48,
    marginTop: 12,
  },
  progressText: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
  cardInfoContainer: {
    flexDirection: 'column',
    marginTop: 48,
  },
  projectName: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  projectProgress: {
    color: 'white',
    fontSize: 14,
    fontWeight: '400',
    opacity: 0.6,
    marginTop: 6,
  },
});
