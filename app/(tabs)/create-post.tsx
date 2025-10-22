import { colors, fontSize, fontWeight, spacing } from '@/constants/theme';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CreatePost() {
  const router = useRouter();
  const [postText, setPostText] = useState('');
  const maxLength = 300;
  const remainingChars = maxLength - postText.length;
  const canPost = postText.trim().length > 0 && postText.length <= maxLength;

  const handleCancel = () => {
    router.back();
  };

  const handlePost = () => {
    if (canPost) {
      // Handle posting logic here
      console.log('Posting:', postText);
      router.back();
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleCancel}>
            <Text style={styles.cancelButton}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handlePost}
            disabled={!canPost}
            style={[
              styles.postButton,
              !canPost && styles.postButtonDisabled,
            ]}
          >
            <Text
              style={[
                styles.postButtonText,
                !canPost && styles.postButtonTextDisabled,
              ]}
            >
              Post
            </Text>
          </TouchableOpacity>
        </View>

        {/* Input Area */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="What's up?"
            placeholderTextColor={colors.textTertiary}
            multiline
            value={postText}
            onChangeText={setPostText}
            maxLength={maxLength}
            autoFocus
          />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.charactersLeft}>Characters left</Text>
          <Text
            style={[
              styles.characterCount,
              remainingChars < 0 && styles.characterCountError,
            ]}
          >
            {remainingChars}
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
    marginTop: spacing.xl,
    marginBottom: 200,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
  },
  cancelButton: {
    color: colors.primary,
    fontSize: fontSize.md,
    fontWeight: fontWeight.semibold,
  },
  postButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 20,
  },
  postButtonDisabled: {
    backgroundColor: colors.backgroundSecondary,
  },
  postButtonText: {
    color: colors.textPrimary,
    fontSize: fontSize.md,
    fontWeight: fontWeight.semibold,
  },
  postButtonTextDisabled: {
    color: colors.textTertiary,
  },
  inputContainer: {
    flex: 1,
    paddingTop: spacing.sm,
  },
  textInput: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: fontSize.lg,
    textAlignVertical: 'top',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.backgroundSecondary,
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
  },
  charactersLeft: {
    color: colors.primary,
    fontSize: fontSize.sm,
    fontWeight: fontWeight.semibold,
  },
  characterCount: {
    color: colors.textPrimary,
    fontSize: fontSize.md,
    fontWeight: fontWeight.medium,
  },
  characterCountError: {
    color: colors.error,
  },
});
