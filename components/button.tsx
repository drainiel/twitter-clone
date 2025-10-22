import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View
} from 'react-native';
import { borderRadius, colors, fontSize, fontWeight, spacing } from '../constants/theme';

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
            color={colors.textPrimary}
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
    backgroundColor: colors.primary,
    paddingVertical: 13,
    borderRadius: borderRadius.sm,
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: spacing.sm,
  },
  buttonText: {
    color: colors.textPrimary,
    fontSize: fontSize.sm,
    fontWeight: fontWeight.semibold,
  },
  secondaryButton: {
    backgroundColor: colors.backgroundSecondary,
  },
  secondaryButtonText: {
    color: colors.textSecondary,
  },
  smallButton: {
    borderRadius: borderRadius.md,
    paddingVertical: 13,
    alignSelf: 'flex-start',
    paddingHorizontal: 30,
  },
  smallButtonText: {
    fontSize: fontSize.sm,
  },
  mediumButton: {
    borderRadius: borderRadius.md,
    paddingVertical: 13,
    alignSelf: 'flex-start',
    paddingHorizontal: 80,
  },
  mediumButtonText: {
    fontSize: fontSize.sm,
  },
  warningButton: {
    backgroundColor: colors.error,
  },
  warningButtonText: {
    color: colors.textPrimary,
  },
  warningButtonAlignment: {
    alignItems: 'flex-start',
    paddingLeft: spacing.lg,
    paddingVertical: 11,
  },
});