import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  TextInput as RNTextInput,
  StyleSheet,
  Text,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  borderRadius,
  colors,
  fontSize,
  fontWeight,
  iconSize,
  spacing,
} from '../constants/theme';

/**
 * Props for the CustomTextInput component.
 * Extends React Native's TextInputProps with additional custom properties.
 */
interface CustomTextInputProps extends TextInputProps {
  /** Optional Ionicons icon name to display inside the input field.
   */
  icon?: keyof typeof Ionicons.glyphMap;
  /** Callback function invoked when the icon is pressed.
   * If not provided, the icon will not be interactive.
   */
  onIconPress?: () => void;
  /** Optional label text displayed above the input field.
   */
  label?: string;
  /** Whether the input should support multiple lines of text.
   * When enabled, the input expands vertically with a maximum height constraint.
   */
  multiline?: boolean;
}

/**
 * A customizable text input component with optional icon, label, and multiline support.
 * Features focus state styling, configurable icon interactions, and adaptive height for multiline text.
 * 
 * The component supports all standard React Native TextInput props and adds:
 * - Optional leading icon with press handler
 * - Label text above the input
 * - Focus state with border color change
 * - Multiline mode with auto-expanding height (up to max height)
 *
 * @param props - The component props extending TextInputProps
 * @returns A styled text input component with optional icon and label
 */
export default function TextInput({
  icon,
  onIconPress,
  label,
  style,
  multiline, 
  ...props
}: CustomTextInputProps) {
  /**
   * Tracks whether the input field is currently focused.
   * Used to apply focus-specific styling (e.g., border color change).
   */
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.container,
          isFocused && styles.containerFocused,
          multiline && styles.containerMultiline,
        ]}
      >
        {icon && (
          <TouchableOpacity
            onPress={onIconPress}
            disabled={!onIconPress}
            style={styles.iconContainer}
          >
            <Ionicons
              name={icon}
              size={iconSize.lg}
              color={isFocused ? colors.primary : colors.textTertiary}
            />
          </TouchableOpacity>
        )}

        <RNTextInput
          style={[
            styles.input,
            multiline && styles.inputMultiline,
          ]}
          placeholderTextColor={colors.textPlaceholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          multiline={multiline} 
          {...props}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: spacing.sm,
  },
  label: {
    color: colors.textSecondary,
    fontSize: fontSize.sm,
    marginBottom: spacing.sm,
    fontWeight: fontWeight.medium,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundSecondary,
    borderRadius: borderRadius.lg,
    borderColor: colors.border,
    paddingHorizontal: 16,
    height: 45, 
    borderWidth: 1,
  },
  containerFocused: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  containerMultiline: {
    height: 'auto', 
    minHeight: 45, 
    maxHeight: 120, 
    alignItems: 'flex-start', 
    paddingVertical: spacing.md, 
  },
  iconContainer: {
    marginRight: spacing.md,
  },
  input: {
    flex: 1,
    color: colors.textPrimary, 
    fontSize: fontSize.md,
    padding: 0, 
  },
  inputMultiline: {
    paddingTop: 0,
    paddingBottom: 0,
  },
});