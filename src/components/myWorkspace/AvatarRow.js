import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Avatar from '@components/common/Avatar';

const AvatarRow = props => {
  return (
    <View style={styles.container}>
      {props.avatars.slice(0, 5).map((avatar, index) => (
        <>
          {props.avatars.length > 5 && (
            <View style={styles.remainedAvatarOverlay}>
              <Text style={styles.overlayText}>
                +{props.avatars.length - 5}
              </Text>
            </View>
          )}
          <Avatar
            key={`avatar-${index}`}
            source={{
              uri: avatar,
            }}
            resizeMode="cover"
            style={{ marginLeft: index !== 0 ? -8 : 0 }}
          />
        </>
      ))}
    </View>
  );
};

export default AvatarRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  remainedAvatarOverlay: {
    position: 'absolute',
    top: 0,
    right: 4,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    width: 32,
    height: 32,
    borderRadius: 32,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: 'white',
  },
  overlayText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
});
