import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Avatar from '@components/common/Avatar';

const AvatarRow = props => {
  if (props.avatars.length === 0) {
    return (
      <View style={{ ...styles.container, justifyContent: 'center' }}>
        <Text style={styles.emptyText}>There is no participant.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {props.avatars.slice(0, 5).map((avatar, index) => (
        <View key={`avatar-${index}`}>
          {props.avatars.length > 5 && (
            <View style={styles.remainedAvatarOverlay}>
              <Text style={styles.overlayText}>
                +{props.avatars.length - 5}
              </Text>
            </View>
          )}
          <Avatar
            name={avatar.name}
            source={{
              uri: avatar.imageUrl,
            }}
            resizeMode="cover"
            style={{ marginLeft: index !== 0 ? -8 : 0 }}
          />
        </View>
      ))}
    </View>
  );
};

export default AvatarRow;

const styles = StyleSheet.create({
  emptyText: {
    fontSize: 12,
  },
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
