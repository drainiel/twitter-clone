import { colors } from '@/constants/theme';
import { Post as PostType } from '@/types';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Post } from '../post/post';

/**
 * Props for the Feed component.
 */
interface FeedProps {
  /** Array of post objects to display in the feed.
   */
  posts: PostType[];
}

/**
 * A component that displays a scrollable list of posts.
 * Renders all posts in a vertical scrollable view.
 *
 * @param props - The component props
 * @returns A scrollable list of posts
 */
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
    // Note: This is empty in the original, content styling (like padding) could go here.
  },
});