// ============================================
// commentList.tsx - List of comments
// ============================================
import { colors, fontSize, spacing } from '@/constants/theme';
import { Comment as CommentType } from '@/types';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Comment } from './comment';

interface CommentListProps {
  comments: CommentType[];
}

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
