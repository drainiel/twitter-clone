import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'warning';
  size?: 'small' | 'medium' | 'large';
}

export default function Button({
  title,
  variant = 'primary',
  size = 'large',
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'secondary' && styles.secondaryButton,
        variant === 'warning' && styles.warningButton,
        variant === 'warning' && styles.warningButtonAlignment,
        size === 'small' && styles.smallButton,
        size === 'medium' && styles.mediumButton,
      ]}
      disabled={variant === 'warning'}
      {...props}
    >
      <View style={styles.buttonContent}>
        {variant === 'warning' && (
          <Ionicons
            name="warning"
            size={20}
            color="#fff"
            style={styles.icon}
          />
        )}
        <Text
          style={[
            styles.buttonText,
            variant === 'secondary' && styles.secondaryButtonText,
            variant === 'warning' && styles.warningButtonText,
            size === 'small' && styles.smallButtonText,
            size === 'medium' && styles.mediumButtonText,
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#208BFE',
    paddingVertical: 13,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
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
    borderRadius: 10,
    paddingVertical: 13,
    alignSelf: 'flex-start',
    paddingHorizontal: 80,
  },
  mediumButtonText: {
    fontSize: 14,
  },
  warningButton: {
    backgroundColor: '#E60B3E',
  },
  warningButtonText: {
    color: '#fff',
  },
  warningButtonAlignment: {
    alignItems: 'flex-start',
    paddingLeft: 16,
    paddingVertical: 11,
  },
});