// ============================================
// text-input.tsx - text field input with
//  different styles, label...
// ============================================
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

interface CustomTextInputProps extends TextInputProps {
  icon?: keyof typeof Ionicons.glyphMap;
  onIconPress?: () => void;
  label?: string;
  multiline?: boolean;
}

export default function TextInput({
  icon,
  onIconPress,
  label,
  style,
  multiline, 
  ...props
}: CustomTextInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.container,
          isFocused && styles.containerFocused,
          // Apply multiline style if prop is true
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
            // Apply multiline style to input
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
  // Multiline variant
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