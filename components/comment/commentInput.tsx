import CharacterCountDisplay from '@/components/character-count';
import TextInput from '@/components/text-input';
import { colors, spacing } from '@/constants/theme';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View
} from 'react-native';

/**
 * Props for the CommentInput component.
 */
interface CommentInputProps {
  /** The current text value of the input field.
   */
  value: string;

  /** Callback function invoked when the text input value changes.
   * @param text - The new text value
   */
  onChangeText: (text: string) => void;
  
  /** Placeholder text displayed when the input is empty.
   * @default 'Add a comment...'
   */
  placeholder?: string;

  /** Maximum number of characters allowed in the input.
   * @default 280
   */
  maxLength?: number;
}

/**
 * A component that provides a text input field for adding comments with character count tracking.
 * Features a multiline input with keyboard avoidance behavior and displays the remaining
 * character count below the input field. Adapts keyboard behavior based on platform (iOS/Android).
 *
 * @param props - The component props
 * @returns A keyboard-aware comment input with character counter
 */
export const CommentInput: React.FC<CommentInputProps> = ({
  value,
  onChangeText,
  placeholder = 'Add a comment...',
  maxLength = 280,
}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder={placeholder}
            value={value} 
            onChangeText={onChangeText} 
            maxLength={maxLength}
            multiline
          />
        </View>
      </View>
      <View style={styles.footer}>
        <CharacterCountDisplay
          currentLength={value.length}
          maxLength={maxLength}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
    padding: spacing.lg,
    marginBottom: -spacing.sm,
  },
  inputWrapper: {
    flex: 1,
  },
  footer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
  },
});