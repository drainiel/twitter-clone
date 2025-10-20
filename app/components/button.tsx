import React from 'react';
import {
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    TouchableOpacityProps,
    ViewStyle,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  textStyle?: TextStyle;
  buttonStyle?: ViewStyle;
}

export default function Button({
  title,
  variant = 'primary',
  size = 'large',
  textStyle,
  buttonStyle,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'secondary' && styles.secondaryButton,
        size === 'small' && styles.smallButton,
        size === 'medium' && styles.mediumButton,
        buttonStyle,
      ]}
      {...props}
    >
      <Text
        style={[
          styles.buttonText,
          variant === 'secondary' && styles.secondaryButtonText,
          size === 'small' && styles.smallButtonText,
          size === 'medium' && styles.mediumButtonText,
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#208BFE',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: '#1E2936',
  },
  secondaryButtonText: {
    color: '#93A5B7',
  },
  smallButton: {
    borderRadius: 10,
    paddingVertical: 13,
    alignSelf: 'flex-start',
    paddingHorizontal: 30,
  },
  smallButtonText: {
    fontSize: 14,
  },
  mediumButton: {
    paddingVertical: 12,
    borderRadius: 7,
  },
  mediumButtonText: {
    fontSize: 15,
  },
});