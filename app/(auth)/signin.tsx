
import Button from '@/components/button';
import TextInput from '@/components/text-input';
import { colors, fontSize, fontWeight, spacing } from '@/constants/theme';
import { router } from 'expo-router';
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export default function signIn() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={styles.scrollView} keyboardShouldPersistTaps="handled">
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Sign In</Text>
        </View>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Enter your account credentials</Text>
        </View>
        {/* Username input */}
        <TextInput
          placeholder="Username or email address"
          icon="at"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        {/* Password input */}
        <TextInput
          placeholder="Password"
          icon="lock-closed"
          secureTextEntry
          autoCapitalize="none"
          keyboardType="default"
        />
        {/* Incorrect credentials warning - to set optional */}
        <Button
          title="Incorrect username or password."
          variant='warning'
        />

        {/* Back and next*/}
        <View style={styles.buttonsContainer}>
          <Button
            title="Back"
            size='small'
            variant='secondary'
            onPress={() => router.push('/(auth)')}
          />
          <Button
            title="Next"
            size='small'
            onPress={() => router.push('/(tabs)/home')}
          />
        </View>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Or sign in with a token</Text>
        </View>
        {/* Login with token */}
        <Button
          title="Continue with token"
          variant='secondary'
          onPress={() => router.push('/(auth)/token-login')}
        />
      </ScrollView>
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
  },
  headerContainer: {
    marginBottom: spacing.xl,
    marginTop: spacing.loginscreenMarginTop,
  },
  headerText: {
    fontSize: fontSize.xxxl,
    color: colors.textPrimary,
    fontWeight: fontWeight.bold,
  },
  subtitleContainer: {
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
    fontWeight: fontWeight.regular,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.xl,
    marginBottom: spacing.xs,
  },

});
