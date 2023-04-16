import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import HomeIcon from '@components/icons/HomeIcon';
import NotificationIcon from '@components/icons/NotificationIcon';
import PaymentIcon from '@components/icons/PaymentIcon';
import AccountIcon from '@components/icons/AccountIcon';

import {
  ACCOUNT_SETTING,
  HOME,
  NOTIFICATION,
  PAYMENT,
} from '@constants/routes';
import Colors from '@constants/colors';

const BottomTabs = (props: BottomTabBarProps): JSX.Element => {
  const { state, descriptors, navigation } = props;

  const getIcon = (isActive: boolean, route: string): JSX.Element => {
    switch (route) {
      case HOME:
        return <HomeIcon />;
      case NOTIFICATION:
        return (
          <View>
            <NotificationIcon />
            <View style={styles.notificationIndicator} />
          </View>
        );
      case PAYMENT:
        return <PaymentIcon />;
      case ACCOUNT_SETTING:
        return <AccountIcon />;
      default:
        return <></>;
    }
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({
              name: route.name,
              merge: true,
              params: {},
            });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            {getIcon(isFocused, route.name)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 20,
    paddingBottom: 36,
    borderTopWidth: 2,
    borderTopColor: Colors.grey07,
    backgroundColor: Colors.white,
  },
  notificationIndicator: {
    backgroundColor: Colors.redDark,
    width: 12,
    height: 12,
    borderRadius: 12,
    position: 'absolute',
    top: 4,
    right: 4,
  },
});
