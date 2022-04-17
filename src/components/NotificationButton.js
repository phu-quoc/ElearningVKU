import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const NotificationButton = ({onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    >
      <FontAwesome5Icon name="bell" size={20} />
    </TouchableOpacity>
  );
};

export default NotificationButton;
