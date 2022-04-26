import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Agenda } from 'react-native-calendars';
import { AgendaData, HourHeight } from '@constants/data';
import { getMonthName } from '@utils/date';
import Icon from 'react-native-vector-icons/Feather';
import NavigationService from '@utils/navigationService';
import Colors from '@constants/colors';

import Day from '@components/calendar/Day';
import Tasks from '@components/calendar/Tasks';

const CalendarScreen = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const agendaRef = useRef(null);

  const goBackToHome = () => {
    NavigationService.goBack();
  };

  const openCalendar = () => {
    agendaRef.current.toggleCalendarPosition(!isCalendarOpen);
    setIsCalendarOpen(!isCalendarOpen);
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
          <Text style={styles.monthBtnText}>
            {getMonthName(selectedDate.getMonth())},{' '}
            {selectedDate.getFullYear()}
          </Text>
        </TouchableOpacity>
      </View>
      <Agenda
        ref={agendaRef}
        items={AgendaData}
        hideKnob
        onDayPress={day => {
          setSelectedDate(new Date(day.timestamp));
          setIsCalendarOpen(false);
        }}
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
          dotColor: Colors.selectedDate,
          selectedDotColor: 'transparent',
          backgroundColor: Colors.backgroundColor,
          calendarBackground: Colors.backgroundColor,
          selectedDayBackgroundColor: Colors.backgroundColor,
          textSectionTitleColor: 'black',
          selectedDayTextColor: Colors.selectedDate,
          textDayFontWeight: '700',
          textMonthFontSize: 18,
          textMonthFontWeight: '500',
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
