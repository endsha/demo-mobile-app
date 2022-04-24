import React from 'react';
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
  22, 23,
];

const hourHeight = 52;

const Day = () => {
  return (
    <View style={styles.dayContainer}>
      {hours.map((hour, index) => (
        <View style={styles.hourContainer} key={`hour-${index}`}>
          <Text>
            {hour > 12 ? hour % 12 : hour} {hour > 12 ? 'PM' : 'AM'}
          </Text>
        </View>
      ))}
      <View style={styles.hourContainer} key={`hour-24`}>
        <Text>0 AM</Text>
      </View>
    </View>
  );
};

const Tasks = props => {
  return (
    <View style={{ paddingRight: 20 }}>
      {hours.map(hour => {
        const hourTasks = [];
        props.tasks.map(task => {
          if (hour === task.start) {
            hourTasks.push({ ...task, isStart: true });
          } else if (hour === task.end) {
            hourTasks.push({ ...task, isEnd: true });
          } else if (task.start < hour && task.end > hour) {
            hourTasks.push({ ...task, isMiddle: true });
          }
        });
        if (hourTasks.length === 0) {
          return (
            <View style={styles.emptyTask}>
              <View style={styles.dashLine} />
            </View>
          );
        } else {
          if (hourTasks.length === 1) {
            return (
              <View
                style={{
                  ...styles.taskContainer,
                  height: hourHeight,
                }}
              >
                <View
                  style={{
                    ...styles.taskTime,
                    height: hourTasks[0].isEnd ? hourHeight / 2 - 10 : hourHeight,
                  }}
                />
                {hourTasks[0].isStart && <Text>{hourTasks[0].name}</Text>}
              </View>
            );
          }
        }
      })}
    </View>
  );
};

const CalendarScreen = () => {
  const goBackToHome = () => {
    NavigationService.goBack();
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
        <TouchableOpacity style={styles.monthBtn}>
          <Text style={styles.monthBtnText}>April, 2022</Text>
        </TouchableOpacity>
      </View>
      <Agenda
        items={{
          '2022-04-22': [
            {
              tasks: [
                {
                  name: 'Testing',
                  start: 0,
                  end: 6,
                },
              ],
            },
          ],
        }}
        selected={'2022-04-22'}
        hideKnob
        renderEmptyData={() => <Day />}
        renderItem={item => <Tasks tasks={item.tasks} />}
        renderDay={() => {
          return <Day />;
        }}
        disabledDaysIndexes={[0, 6]}
        theme={{
          dotColor: 'transparent',
          selectedDotColor: 'transparent',
          backgroundColor: Colors.backgroundColor,
          calendarBackground: Colors.backgroundColor,
          selectedDayBackgroundColor: Colors.backgroundColor,
          selectedDayTextColor: '#D46B74',
          // textSectionTitleColor: '#D46B74',
          textSectionTitleDisabledColor: 'red',
          monthTextColor: 'blue',
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
  taskContainer: {},
  taskTime: {
    backgroundColor: '#FBE3CA',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },
});
