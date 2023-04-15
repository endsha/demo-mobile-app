import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import {
  ACCOUNT_SETTING,
  HOME,
  NOTIFICATION,
  PAYMENT,
} from '@constants/routes';

const BottomTabs = (props: BottomTabBarProps): JSX.Element => {
  const { state, descriptors, navigation } = props;

  const getIcon = (isActive: boolean, route: string): JSX.Element => {
    switch (route) {
      case HOME:
        return <Text>Home</Text>;
      case NOTIFICATION:
        return <Text>Noti</Text>;
      case PAYMENT:
        return <Text>Payment</Text>;
      case ACCOUNT_SETTING:
        return <Text>Account</Text>;
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
            onLongPress={onLongPress}
            // style={styles.iconButton}
          >
            {getIcon(isFocused, route.name)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  container: {},
});
