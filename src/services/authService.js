import { postData } from '@utils/fetch';
import Config from '@constants/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthService = {
  signIn: async () => {
    try {
      const response = await postData('signIn', {
        email: Config.DEMO_EMAIL,
        password: Config.DEMO_PASSWORD,
      });
      if (response.statusCode === 200) {
        await AsyncStorage.setItem('token', response.results.token);
      }
    } catch (e) {
      console.log('ERROR: ', e);
    }
  },
};

export default AuthService;
