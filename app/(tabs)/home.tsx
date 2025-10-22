import { Feed } from '@/components/feed/feed';
import { colors, fontSize, fontWeight, spacing } from '@/constants/theme';
import { mockPosts } from '@/mockData';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Logo</Text>
              </View>
      <View>
        return <Feed posts={mockPosts} />;
      </View> 
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#161E27',
    paddingHorizontal: 20,
  },
  headerContainer: {
      marginTop: spacing.xl,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    headerText: {
      fontSize: fontSize.xxxl,
      color: colors.textPrimary,
      fontWeight: fontWeight.bold,
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#161E27',
    marginTop: 100,
  },
});