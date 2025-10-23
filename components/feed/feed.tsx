// ============================================
// Feed.tsx - Feed container
// ============================================
import { colors, spacing } from '@/constants/theme';
import { Post as PostType } from '@/types';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Post } from '../post/post';
interface FeedProps {
  posts: PostType[];
}

export const Feed: React.FC<FeedProps> = ({ posts }) => {
  return (
    <ScrollView 
      style={styles.feed}
      contentContainerStyle={styles.feedContent}
    >
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  feed: {
    flex: 1,
    backgroundColor: colors.background,
  },
  feedContent: {
    marginTop: spacing.xxl,
  },
});