import Button from '@/components/button';
import { colors, fontSize, fontWeight, spacing } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function index() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons name="logo-twitter" style={styles.icon} />
        <Text style={styles.title}>
          Twitter
        </Text>
        <Text style={styles.subtitle}>
          What's up?
        </Text>
      </View>

      {/* !!! MUST be removed it's just to skip home during development !!! */}
      <View style={styles.removeContainer}>
        <Button 
          title="Skip to home"
          variant='warning'
          size='small'
          shape='pill'
          onPress={() => router.push('/(tabs)/home')}
        />
      </View>
       
      {/* Create account button & Sign in button */}
      <View style={styles.buttonsContainer}>
        <Button 
          title="Create account"
          onPress={() => router.push('/(auth)/create-account')}
        />
        <Button 
          title="Sign in"
          variant="secondary"
          onPress={() => router.push('/(auth)/signin')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 90,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.textPrimary,
    fontSize: 32,
    fontWeight: fontWeight.bold,
    textAlign: 'left',
    marginBottom: spacing.sm,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: fontSize.xl,
    fontWeight: fontWeight.regular,
    textAlign: 'left',
  },
  buttonsContainer: {
    width: '100%',
  },
  icon: {
    color: colors.primary,
    fontSize: 120,
    marginBottom: spacing.xl,
  },
  
  //* !!! MUST be removed it's just to skip home during development !!! *
  removeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: spacing.xxl,
  },
});