import Button from '@/components/button'; // Assuming this is the correct path
import { colors, fontSize, fontWeight, spacing } from '@/constants/theme';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CreatePost() {
  const router = useRouter();
  const [postText, setPostText] = useState('');
  const maxLength = 300;
  const remainingChars = maxLength - postText.length;
  const canPost = postText.trim().length > 0 && postText.length <= maxLength;

  const handleCancel = () => {
    Keyboard.dismiss();
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
    marginBottom: 100, // Bcs keyboard does not appear on simulator
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