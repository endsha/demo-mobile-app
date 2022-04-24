import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Tasks } from '@constants/data';
import { CALENDAR } from '@constants/routes';
import NavigationService from '@utils/navigationService';
import Colors from '@constants/colors';
import Icon from 'react-native-vector-icons/Feather';

const TaskRow = props => {
  let icon = 'clock';
  let iconColor = 'gray';
  let taskInfoStatus = 'started';

  switch (props.id) {
    case 'to-do':
      icon = 'clock';
      iconColor = Colors.status.todo;
      break;

    case 'in-progress':
      icon = 'loader';
      iconColor = Colors.status.inProgress;
      break;

    case 'done':
      icon = 'fast-forward';
      iconColor = Colors.status.done;
      taskInfoStatus = 'completed';
      break;

    default:
      break;
  }

  return (
    <View style={styles.taskRow}>
      <View style={{ ...styles.taskRowIcon, backgroundColor: iconColor }}>
        <Icon name={icon} size={20} color="white" />
      </View>
      <View style={styles.taskRowContent}>
        <Text style={styles.taskStatusTitle}>{props.title}</Text>
        <Text style={styles.taskStatusInfo}>
          {props.totalTasks} task now • {props.proceedTasks} {taskInfoStatus}
        </Text>
      </View>
    </View>
  );
};

const TaskSection = () => {
  const toCalendarScreen = () => {
    NavigationService.navigate(CALENDAR);
  };

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>My Tasks</Text>
        <TouchableOpacity
          style={styles.calendarBtn}
          onPress={() => toCalendarScreen()}
        >
          <Icon name="calendar" size={18} color="white" />
        </TouchableOpacity>
      </View>
      {Tasks.map(task => (
        <TaskRow
          key={task.id}
          id={task.id}
          title={task.title}
          totalTasks={task.totalTasks}
          proceedTasks={task.proceedTasks}
        />
      ))}
    </View>
  );
};

export default TaskSection;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  calendarBtn: {
    width: 54,
    height: 54,
    borderRadius: 54,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryButtonColor,
  },
  taskRow: {
    flexDirection: 'row',
    marginTop: 16,
  },
  taskRowIcon: {
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 48,
    marginRight: 16,
  },
  taskRowContent: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  taskStatusTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  taskStatusInfo: {
    fontSize: 16,
    opacity: 0.5,
  },
});
