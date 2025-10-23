// ============================================
// commentInput.tsx - Input for new comments
// ============================================
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
}

export const CommentInput: React.FC<CommentInputProps> = ({
  value, // Use value from props
  onChangeText, // Use onChangeText from props
  placeholder = 'Add a comment...',
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
            maxLength={280}
            multiline
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0.5,
    borderTopColor: colors.separator,
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

});