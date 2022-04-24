import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MyWorkspaceService from '@services/myWorkspaceService';

import ProgressBar from '@components/common/ProgressBar';
import AvatarRow from '@components/myWorkspace/AvatarRow';

const avatars = [
  
];

const ProjectCard = (props) => {
  return (
    <View style={styles.projectCard}>
      <Text style={styles.projectName}>{props.name}</Text>
      <AvatarRow avatars={avatars} />
      <View style={styles.progressInfo}>
        <Text style={styles.progressText}>Progress</Text>
        <Text style={styles.progressNumber}>51%</Text>
      </View>
      <ProgressBar percentage={51} style={styles.progressBar} />
    </View>
  );
};

const ProjectSection = () => {
  const [myWorkspaces, setMyWorkspaces] = useState([]);

  useEffect(() => {
    const getMyWorkspaces = async () => {
      const workspaces = await MyWorkspaceService.getWorkspaces();
      setMyWorkspaces(workspaces);
    };

    getMyWorkspaces();
  }, []);

  return (
    <View style={styles.projects}>
      {myWorkspaces.map((workspace) => <ProjectCard key={workspace.id} name={workspace.title}/>)}
    </View>
  );
};

export default ProjectSection;

const styles = StyleSheet.create({
  projects: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  projectCard: {
    width: '48%',
    backgroundColor: 'white',
    marginTop: 16,
    borderRadius: 16,
    padding: 20,
  },
  projectName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  progressInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32,
  },
  progressText: {
    fontSize: 12,
    fontWeight: '600',
  },
  progressNumber: {
    fontSize: 12,
    fontWeight: '600',
  },
  progressBar: {
    marginTop: 8,
  },
});
