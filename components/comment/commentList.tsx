import { colors, fontSize, spacing } from '@/constants/theme';
import { Comment as CommentType } from '@/types';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Comment } from './comment';

/**
 * Props for the CommentList component.
 */
interface CommentListProps {
  /** Array of comment objects to display in the list.
   */
  comments: CommentType[];
}

/**
 * A component that displays a scrollable list of comments.
 * Shows an empty state message when no comments are present, otherwise
 * renders all comments in a vertical scrollable view without scroll indicators.
 *
 * @param props - The component props
 * @returns A scrollable list of comments or an empty state message
 */
export const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  if (comments.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No comments yet. Be the first to comment!</Text>
      </View>
    );
  }

  return (
    <ScrollView 
      style={styles.list}
      showsVerticalScrollIndicator={false}
    >
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.xxl
  },
  emptyText: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});