import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import BottomTabs from '@components/BottomTabs';

import Home from '@screens/home-tabs/Home';
import NotificationScreen from '@screens/home-tabs/Notification';
import PaymentScreen from '@screens/home-tabs/Payment';
import AccountScreen from '@screens/home-tabs/Account';

import { BalanceProvider } from '@contexts/BalanceContext';

import { BottomTabParamList } from '@custom-types/navigation';
import {
  ACCOUNT_SETTING,
  HOME,
  NOTIFICATION,
  PAYMENT,
} from '@constants/routes';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const HomeTabs = (): JSX.Element => {
  return (
    <BalanceProvider>
      <BottomTab.Navigator
        tabBar={(props: BottomTabBarProps) => <BottomTabs {...props} />}>
        <BottomTab.Screen
          name={HOME}
          component={Home}
          options={{ headerShown: false }}
        />
        <BottomTab.Screen
          name={NOTIFICATION}
          component={NotificationScreen}
          options={{ headerShown: false }}
        />
        <BottomTab.Screen
          name={PAYMENT}
          component={PaymentScreen}
          options={{ headerShown: false }}
        />
        <BottomTab.Screen
          name={ACCOUNT_SETTING}
          component={AccountScreen}
          options={{ headerShown: false }}
        />
      </BottomTab.Navigator>
    </BalanceProvider>
  );
};

export default HomeTabs;
