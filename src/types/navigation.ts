import type { StackNavigationProp } from '@react-navigation/stack';

export type BottomTabParamList = {
  readonly Home: undefined;
  readonly Notification: undefined;
  readonly Payment: undefined;
  readonly AccountSetting: undefined;
};

export type StackParamList = {
  readonly Welcome: undefined;
  readonly HomeTabs?: {
    readonly tab: string;
  };
};

export type MainStackNavigationProp = StackNavigationProp<StackParamList>;

