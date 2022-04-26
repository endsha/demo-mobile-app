import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Hours, HourHeight } from '@constants/data';

const Tasks = props => {
  const sortedTasks = props.tasks.sort((prev, next) => prev.start - next.start);

  return (
    <View style={{ width: '100%' }}>
      {Hours.map((hour, hourIndex) => {
        const emptyHourIndex = props.tasks.findIndex(
          task => task.start <= hour && task.end >= hour,
        );
        return (
          <View style={styles.emptyTask} key={`hour-${hourIndex}`}>
            {emptyHourIndex === -1 && <View style={styles.dashLine} />}
          </View>
        );
      })}
      {sortedTasks.map((task, taskIndex) => {
        const taskHeight = HourHeight * (task.end - task.start + 1);
        return (
          <View
            style={{
              ...styles.taskContainer,
              top: HourHeight * task.start,
              height: taskHeight,
            }}
            key={`task-${taskIndex}`}
          >
            <View
              style={{
                ...styles.taskTime,
                backgroundColor: task.color,
                height: taskHeight - HourHeight / 2 - 16,
              }}
            >
              <Text style={styles.taskNameText}>{task.name}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  emptyTask: {
    height: HourHeight,
    paddingRight: 20,
  },
  dashLine: {
    width: '100%',
    borderStyle: 'dashed',
    borderRadius: 2,
    borderColor: 'black',
    borderWidth: 1,
    opacity: 0.1,
    marginTop: 8,
  },
  taskContainer: {
    paddingRight: 20,
    position: 'absolute',
    left: 0,
    width: '100%',
  },
  taskTime: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    borderRadius: 20,
    padding: 20,
  },
  taskNameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
