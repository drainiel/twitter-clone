// ============================================
// commentInput.tsx - Input for new comments
// (Rewritten to use custom components)
// ============================================
import Button from '@/components/button';
import TextInput from '@/components/text-input';
import { colors, spacing } from '@/constants/theme';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View
} from 'react-native';

interface CommentInputProps {
  onSubmit: (text: string) => void;
  placeholder?: string;
}

export const CommentInput: React.FC<CommentInputProps> = ({
  onSubmit,
  placeholder = 'Add a comment...',
}) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text.trim()) {
      onSubmit(text.trim());
      setText('');
    }
  };

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
            value={text}
            onChangeText={setText}
            maxLength={280}
            multiline
          />
        </View>
        <Button
          title="Post"
          onPress={handleSubmit}
          disabled={!text.trim()}
          shape="pill"
          variant='primary'
        />
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
    gap: spacing.md,
    marginBottom: -spacing.sm,
  },
  inputWrapper: {
    flex: 1,
  },
  postButton: {
    marginBottom: 0, 
  },
});