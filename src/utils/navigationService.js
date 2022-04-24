import { CommonActions } from '@react-navigation/native';
import { DASHBOARD } from '@constants/routes';

let _navigator;

const setTopLevelNavigator = navigatorRef => {
  _navigator = navigatorRef;
};

const navigate = (routeName, params = {}) => {
  _navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params: params,
    }),
  );
};

const goBack = () => {
  _navigator.dispatch(CommonActions.goBack());
};

const NavigationService = {
  setTopLevelNavigator,
  navigate,
  goBack,
};

export default NavigationService;
