import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Feather';
import NavigationService from '@utils/navigationService';
import Colors from '@constants/colors';

const hours = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24,
];

const hourHeight = 52;

const Day = () => {
  return (
    <View style={styles.dayContainer}>
      {hours.map((hour, index) => (
        <View style={styles.hourContainer} key={`hour-${index}`}>
          {hour !== 24 ? (
            <Text>
              {hour > 12 ? hour % 12 : hour} {hour > 12 ? 'PM' : 'AM'}
            </Text>
          ) : (
            <Text>0 AM</Text>
          )}
        </View>
      ))}
    </View>
  );
};

const Tasks = props => {
  const sortedTasks = props.tasks.sort((prev, next) => prev.start - next.start);

  return (
    <View style={{ width: '100%' }}>
      {hours.map((hour, hourIndex) => {
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
        const taskHeight = hourHeight * (task.end - task.start + 1);
        return (
          <View
            style={{
              ...styles.taskContainer,
              top: hourHeight * task.start,
              height: taskHeight,
            }}
            key={`task-${taskIndex}`}
          >
            <View
              style={{
                ...styles.taskTime,
                backgroundColor: task.color,
                height: taskHeight - hourHeight / 2 - 16,
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

const CalendarScreen = () => {
  const agendaRef = useRef(null);

  const goBackToHome = () => {
    NavigationService.goBack();
  };

  const openCalendar = () => {
    agendaRef.current.chooseDay(new Date(), true);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.backgroundColor }}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={styles.backBtn} onPress={() => goBackToHome()}>
          <Icon name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.heading}>
        <Text style={styles.headingTitle}>Today</Text>
        <TouchableOpacity style={styles.addTaskBtn}>
          <Text style={styles.addTaskBtnText}>Add task</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subHeading}>Productive Day, Phillip</Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={styles.monthBtn}
          onPress={() => {
            openCalendar();
          }}
        >
          <Text style={styles.monthBtnText}>April, 2022</Text>
        </TouchableOpacity>
      </View>
      <Agenda
        ref={agendaRef}
        items={{
          '2022-04-22': [
            {
              tasks: [
                {
                  name: 'Testing',
                  start: 0,
                  end: 6,
                  color: '#FBE3CA',
                },
                {
                  name: 'Testing',
                  start: 2,
                  end: 4,
                  color: '#DBE4DD',
                },
                {
                  name: 'Testing',
                  start: 8,
                  end: 10,
                  color: '#F9D6D7',
                },
              ],
            },
          ],
        }}
        selected={'2022-04-22'}
        renderEmptyData={() => (
          <View style={styles.emptyData}>
            <Text>This day have no task.</Text>
          </View>
        )}
        renderItem={item => <Tasks tasks={item.tasks} />}
        renderDay={() => {
          return <Day />;
        }}
        theme={{
          dotColor: 'transparent',
          selectedDotColor: 'transparent',
          backgroundColor: Colors.backgroundColor,
          calendarBackground: Colors.backgroundColor,
          selectedDayBackgroundColor: Colors.backgroundColor,
          selectedDayTextColor: '#D46B74',
          textSectionTitleDisabledColor: 'red',
        }}
      />
    </SafeAreaView>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  backBtn: {
    marginLeft: 16,
    marginTop: 12,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32,
    paddingHorizontal: 20,
  },
  headingTitle: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  addTaskBtn: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 32,
    backgroundColor: Colors.primaryButtonColor,
  },
  addTaskBtnText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  subHeading: {
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: '600',
    opacity: 0.6,
  },
  monthBtn: {
    marginTop: 32,
    marginLeft: 20,
  },
  monthBtnText: {
    fontSize: 18,
    fontWeight: '500',
  },
  emptyData: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayContainer: {
    flexDirection: 'column',
    paddingHorizontal: 24,
    backgroundColor: Colors.backgroundColor,
    alignItems: 'flex-start',
  },
  hourContainer: {
    height: hourHeight,
    alignItems: 'center',
  },
  emptyTask: {
    height: hourHeight,
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
