import Config from '@constants/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchData = (endpoint, headers = {}) => {
  return fetch(`${Config.BASE_URL}${endpoint}`, { headers: headers })
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      return responseJson;
    });
};

export const fetchDataWithToken = async (endpoint, headers) => {
  try {
    const token = await AsyncStorage.getItem('token');

    headers = {
      Authorization: 'Bearer ' + token,
      ...headers,
    }

    const response = await fetch(`${Config.BASE_URL}${endpoint}`, {
      method: 'GET',
      headers: headers,
    });

    const result = await response.json();

    return result;
  } catch (err) {
    console.log('Get Data With Token Error: ', err);
  }
}

export const postData = async (endpoint, body, headers) => {
  try {
    headers = {
      Accept: '*/*',
      'Content-Type': 'application/json',
      ...headers,
    };

    const response = await fetch(`${Config.BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    });

    const result = await response.json();

    return result;
  } catch (err) {
    console.log('Post Data Error: ', err);
  }
};
