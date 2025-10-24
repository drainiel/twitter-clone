import Button from '@/components/button';
import CharacterCountDisplay from '@/components/character-count';
import { colors, fontSize, spacing } from '@/constants/theme';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useConfirmationAlert from '../hoooks/alert';


export default function CreatePost() {
  const router = useRouter();
  const [postText, setPostText] = useState('');
  const maxLength = 300;
  const remainingChars = maxLength - postText.length;
  const canPost = postText.trim().length > 0 && postText.length <= maxLength;
  const { showConfirmationAlert } = useConfirmationAlert();

  const handleCancel = () => {
    showConfirmationAlert({
      title: 'Delete draft',
      message: 'Are you sure you want to delete your draft?',
      confirmButtonText: 'Delete',
      onConfirm: () => {
        // Navigate back 
        Keyboard.dismiss();
        router.back();
      },
      cancelButtonText: 'Cancel'
    });
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
          <Button
            title="Cancel"
            variant="text"
            onPress={handleCancel}
          />

          <Button
            title="Post"
            variant="primary"
            shape="pill"
            onPress={handlePost}
            disabled={!canPost}
          />
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
          <CharacterCountDisplay
            currentLength={postText.length}
            maxLength={maxLength}
          />
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
    marginBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
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
    borderTopWidth: 0.5,
    borderTopColor: colors.separator,
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
    marginHorizontal: -spacing.lg, // to have full size separator
    paddingHorizontal: spacing.lg,
  },
});