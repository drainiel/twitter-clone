import { Feed } from '@/components/feed/feed';
import { colors, fontSize, fontWeight, spacing } from '@/constants/theme';
import { mockLikedPosts } from '@/mockeLikedData';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function likes() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Likes</Text>
        </View>
        <Feed posts={mockLikedPosts} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161E27',
  },
  scrollView: {
    flex: 1,
  },
  headerContainer: {
    marginTop: spacing.xl,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: fontSize.xxxl,
    color: colors.textPrimary,
    fontWeight: fontWeight.semibold,
  },
});