import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '@constants/colors';
import CommonStyles from '@constants/styles';

const HomeHeader = (): JSX.Element => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backBtn}>
        <Icon name='chevron-back' size={24} color={Colors.grey01}/>
      </TouchableOpacity>
      <Text style={styles.title}>Silver Tier</Text>
      <Text style={styles.subtitle}>In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive rewards.</Text>
    </View>
  );
}

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.grey01,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...CommonStyles.typo.header3_32,
    color: Colors.white,
    marginTop: 16,
  },
  subtitle: {
    ...CommonStyles.typo.paragraph1_16,
    color: Colors.grey05,

  },
});

