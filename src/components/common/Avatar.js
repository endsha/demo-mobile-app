import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Avatar = props => {
  const [isError, setError] = useState(false);

  const onError = () => {
    setError(true);
  };

  const convertNameToAvatar = name => {
    const converted = name
      .split(' ')
      .map(item => item[0])
      .join('');

    return converted.substr(-2);
  };

  if (isError) {
    const name = props.name
      ? convertNameToAvatar(props.name).toUpperCase()
      : '';

    return (
      <View style={[styles.defaultStyle, props.style]}>
        {!name ? (
          <Icon name="person" size={24} color="#FFFFFF" />
        ) : (
          <Text style={styles.name}>{name}</Text>
        )}
      </View>
    );
  }

  return <Image {...props} onError={onError} style={[styles.defaultStyle, props.style]} />;
};

export default Avatar;

const styles = StyleSheet.create({
  defaultStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
    backgroundColor: '#B4B4B4',
    borderRadius: 32,
    borderWidth: 1.5,
    borderColor: 'white',
  },
  name: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});
