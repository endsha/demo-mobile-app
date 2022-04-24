import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getStatusBarHeight } from '@utils/helper';
import NavigationService from '@utils/navigationService';
import Colors from '@constants/colors';
import Icon from 'react-native-vector-icons/Feather';

const Header = props => {
  const onGoBack = () => {
    if (props.goBack) {
      props.goBack();
    }
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity disabled={!props.goBack} onPress={() => onGoBack()}>
        <Icon name={props.topIcon ? props.topIcon : 'align-left'} size={32} />
      </TouchableOpacity>
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>Hello,</Text>
        <Icon name="bell" size={32} />
      </View>
      <Text style={styles.usernameText}>Esther Howard</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingTop: getStatusBarHeight(),
    paddingHorizontal: 20,
    backgroundColor: Colors.headerColor,
    paddingBottom: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  greetingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  greetingText: {
    fontSize: 32,
    fontWeight: '300',
  },
  usernameText: {
    fontSize: 32,
    fontWeight: '600',
  },
});
