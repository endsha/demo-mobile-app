import { BottomTabBarProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import BottomTabs from "@components/BottomTabs";

import Home from "@screens/home-tabs/Home";

import {
  BottomTabParamList,
  StackParamList,
} from '@custom-types/navigation';


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const HomeTabs = (): JSX.Element => {
  return (
    <BottomTab.Navigator
      tabBar={(props: BottomTabBarProps) => <BottomTabs {...props} />}
    >
      <BottomTab.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
    </BottomTab.Navigator>
  );
}

export default HomeTabs;
