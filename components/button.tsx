/**
 * A customizable button component with different visual styles, sizes, and shapes.
 * It supports primary, secondary, warning, and text-only variants.
 */

import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View
} from 'react-native';
import { borderRadius, colors, fontSize, fontWeight, iconSize, spacing } from '../constants/theme';

/**
 * Props for the Button component.
 * Extends standard TouchableOpacityProps.
 */
interface ButtonProps extends TouchableOpacityProps {
  /** The text displayed on the button. */
  title: string;

  /** Visual style variant of the button.
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'warning' | 'text';

  /** Size category of the button, affecting padding and font size.
   * @default 'large'
   */
  size?: 'small' | 'medium' | 'large';

  /** Shape of the button's corners.
   * @default 'default' (slightly rounded)
   */
  shape?: 'default' | 'pill';
  
  // Note: 'disabled' is inherited from TouchableOpacityProps
}

/**
 * @param {ButtonProps} props - The props for the Button component.
 * @returns {React.ReactElement} The rendered button component.
 */
export default function Button({
  title,
  variant = 'primary',
  size = 'large',
  shape = 'default',
  disabled,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        // Variant styles
        variant === 'secondary' && styles.secondaryButton,
        variant === 'warning' && styles.warningButton,
        variant === 'warning' && styles.warningButtonAlignment,
        variant === 'text' && styles.textButton,

        // Size styles
        size === 'small' && styles.smallButton,
        size === 'medium' && styles.mediumButton,

        // Shape styles
        shape === 'pill' && styles.pillButton,

        // Disabled style (must be last to override)
        disabled && styles.disabledButton,
      ]}
      disabled={disabled}
      {...props}
    >
      <View style={styles.buttonContent}>
        {variant === 'warning' && (
          <Ionicons
            name="warning"
            size={iconSize.lg}
            color={colors.textPrimary}
            style={styles.icon}
          />
        )}
        <Text
          style={[
            styles.buttonText,
            // Variant text styles
            variant === 'secondary' && styles.secondaryButtonText,
            variant === 'warning' && styles.warningButtonText,
            variant === 'text' && styles.textButtonText,

            // Size text styles
            size === 'small' && styles.smallButtonText,
            size === 'medium' && styles.mediumButtonText,

            // Disabled text style (must be last to override)
            disabled && styles.disabledButtonText,
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
    fontSize: fontSize.md, // Default 'large' text
    fontWeight: fontWeight.semibold,
  },

  // --- Variants ---
  secondaryButton: {
    backgroundColor: colors.backgroundSecondary,
  },
  secondaryButtonText: {
    color: colors.textSecondary,
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
    paddingVertical: 12,
  },
  textButton: {
    backgroundColor: 'transparent',
    marginBottom: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  textButtonText: {
    color: colors.primary,
  },

  // --- Sizes ---
  smallButton: {
    borderRadius: borderRadius.md,
    alignSelf: 'flex-start',
    paddingHorizontal: 30,
  },
  smallButtonText: {
    fontSize: fontSize.sm,
  },
  mediumButton: {
    borderRadius: borderRadius.md,
    paddingVertical: 10,
    alignSelf: 'flex-start',
    paddingHorizontal: 80,
  },
  mediumButtonText: {
    fontSize: fontSize.sm,
  },

  // --- Shape ---
  pillButton: {
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },

  // --- State ---
  disabledButton: {
    backgroundColor: colors.backgroundSecondary,
  },
  disabledButtonText: {
    color: colors.textTertiary,
  },
});