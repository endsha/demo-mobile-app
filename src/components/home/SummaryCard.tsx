import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import ProgressBar from '@components/ProgressBar';
import { useBalance } from '@contexts/BalanceContext';

import Colors from '@constants/colors';
import CommonStyles from '@constants/styles';

const SummaryCard = () => {
  const { balance } = useBalance();

  return (
    <View style={styles.container}>
      <View style={styles.upperBackground} />
      <View style={styles.summaryCard}>
        <Text style={styles.balanceTitle}>Available Coin balance</Text>
        <Text style={styles.balance}>{balance}</Text>
        <ProgressBar style={styles.progressBar} progress={0.65} />
        <Text style={styles.benefit}>
          You have paid rental fee for $1,200. Pay more $800 to achieve Gold
          Tier.
        </Text>
        <TouchableOpacity style={styles.detailBenefitBtn}>
          <Text style={styles.detailBtnText}>View tier benefits</Text>
          <Icon name="chevron-forward" size={24} color={Colors.blueDark} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.myCouponsBtn}>
          <Text style={styles.myCouponsText}>My Coupons</Text>
        </TouchableOpacity>
        <Text style={styles.updateText}>Updated : 02/11/2021</Text>
      </View>
    </View>
  );
};

export default SummaryCard;

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  upperBackground: {
    backgroundColor: Colors.grey01,
    height: 176,
    width: screenWidth,
    position: 'absolute',
    top: 0,
  },
  summaryCard: {
    ...CommonStyles.shadow.low,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.grey09,
    borderRadius: 8,
    padding: 24,
  },
  balanceTitle: {
    ...CommonStyles.typo.title3_14,
    color: Colors.grey05,
  },
  balance: {
    ...CommonStyles.typo.header1_48,
    color: Colors.grey01,
    marginTop: 8,
  },
  progressBar: {
    marginTop: 32,
  },
  benefit: {
    ...CommonStyles.typo.paragraph1_16,
    color: Colors.grey04,
    marginTop: 34,
  },
  detailBenefitBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  detailBtnText: {
    ...CommonStyles.typo.paragraph1_16,
    color: Colors.blueDark,
  },
  myCouponsBtn: {
    width: '100%',
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.grey01,
    borderRadius: 4,
    marginTop: 24,
  },
  myCouponsText: {
    ...CommonStyles.typo.title1_18,
    color: Colors.white,
  },
  updateText: {
    ...CommonStyles.typo.paragraph3_14,
    textAlign: 'center',
    color: Colors.grey05,
    marginTop: 16,
  },
});
