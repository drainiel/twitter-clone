// ============================================
// commentInput.tsx - Input for new comments
// ============================================
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

interface CommentInputProps {
  value: string; 
  onChangeText: (text: string) => void; 
  placeholder?: string;
  maxLength?: number;
}

export const CommentInput: React.FC<CommentInputProps> = ({
  value, // Use value from props
  onChangeText, // Use onChangeText from props
  placeholder = 'Add a comment...',
  maxLength = 280,
}) => {


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.inputContainer}>
        {/* We wrap the TextInput in a View with flex: 1
          so it expands to fill the available space in the row.
        */}
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
      {/* --- ADD THIS SECTION --- */}
      <View style={styles.footer}>
        <CharacterCountDisplay
          currentLength={value.length}
          maxLength={maxLength}
        />
      </View>
      {/* --- END ADD --- */}
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