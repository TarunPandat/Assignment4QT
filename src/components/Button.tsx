import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  ActivityIndicator,
  TextStyle,
} from 'react-native';
import React from 'react';
import mainStyles from '../styles';
import {mergeStyles} from '../utils/helperMethods';
import {Colors} from '../constants';

interface ButtonProps {
  title: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  onPress: () => void;
  icon?: React.ReactNode | JSX.Element;
}

const Button = ({title, isLoading, isDisabled, onPress, icon}: ButtonProps) => {
  const wrapper = mergeStyles(
    mainStyles.w100,
    mainStyles.center,
    mainStyles.brd5,
    {
      height: 40,
      backgroundColor: Colors.black,
    },
  );

  const text: TextStyle = {
    color: Colors.white,
    fontWeight: '600',
  };

  return (
    <TouchableOpacity
      style={wrapper}
      onPress={onPress}
      activeOpacity={0.5}
      disabled={isDisabled || isLoading}>
      {isLoading ? (
        <ActivityIndicator size="small" color={Colors.white} />
      ) : (
        <View style={[mainStyles.row, mainStyles.center]} >
          {icon}
          <Text style={text}>{' '}{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
