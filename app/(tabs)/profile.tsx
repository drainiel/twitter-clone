import Button from '@/components/button';
import { Feed } from '@/components/feed/feed';
import { colors, fontSize, fontWeight, iconSize, spacing } from '@/constants/theme';
import { mockPosts } from '@/mockData';
import { Post as PostType } from '@/types';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useConfirmationAlert from '../hoooks/alert';
// --- Placeholder User Data ---
// Replace this with actual user data fetching logic later
const mockUser = {
  name: 'Daniele',
  username: 'drainiel.jetop.social',
  // Assuming mockPosts are the posts *by this user* for now
  // In a real app, you'd filter or fetch posts specifically for the logged-in user
  posts: mockPosts as PostType[],
};
// --- End Placeholder Data ---

export default function ProfileScreen() {
  const handleEditProfile = () => {
   router.push('/edit-profile');
  };

const { showConfirmationAlert } = useConfirmationAlert();
const handleLogoutPress = () => {
    showConfirmationAlert({
    title: 'Log out',
    message: 'Are you sure you want to log out?',
    confirmButtonText: 'Log out',
    onConfirm: () => {
      // Navigate back to profile 
      router.replace('/(auth)')
    },
  });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* --- Profile Header --- */}
        <View style={styles.headerContainer}>
          {/* Action Buttons */}
          <View style={styles.actionsContainer}>
            <Button
              title="Edit Profile"
              variant="secondary"
              size="small"
              shape="pill"
              onPress={handleEditProfile}
              style={styles.editButton}
            />
            {/* Use TouchableOpacity + Icon again */}
            <TouchableOpacity onPress={handleLogoutPress} style={styles.logoutButton}>
              <Ionicons
                name="log-out"
                size={iconSize.lg}
                color={colors.textSecondary}
              />
            </TouchableOpacity>
          </View>

          {/* User Info */}
          <View style={styles.userInfoContainer}>
            <Text style={styles.nameText}>{mockUser.name}</Text>
            <Text style={styles.usernameText}>@{mockUser.username}</Text>
          </View>
        </View>

        {/* --- Posts Section --- */}
        <Text style={styles.postsHeader}>Posts</Text>

        {mockUser.posts.length > 0 ? (
          <Feed posts={mockUser.posts} />
        ) : (
          <View style={styles.noPostsContainer}>
            <Text style={styles.noPostsText}>No posts yet.</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  headerContainer: {
    paddingHorizontal: spacing.xxl,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.separator,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  editButton: {
    marginRight: spacing.md,
    marginBottom: 0,
  },
  logoutButton: {
    padding: spacing.s,
    marginLeft: spacing.s,
  },
  userInfoContainer: {},
  nameText: {
    fontSize: fontSize.xxxl,
    fontWeight: fontWeight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.s,
  },
  usernameText: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
    marginBottom: spacing.s,
  },
  postsHeader: {
    fontSize: fontSize.xxl,
    fontWeight: fontWeight.semibold,
    color: colors.textPrimary,
    paddingHorizontal: spacing.xxl,
    marginTop: spacing.xl,
    marginBottom: spacing.xl,
  },
  noPostsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.xxl * 2,
  },
  noPostsText: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
  },
});