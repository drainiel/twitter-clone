// ============================================
// comment.tsx - Single comment component
// ============================================
import { colors, fontSize, fontWeight, spacing } from '@/constants/theme';
import { Comment as CommentType } from '@/types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface CommentProps {
  comment: CommentType;
}

export const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <View style={styles.comment}>
      <View style={styles.header}>
        <Text style={styles.name}>{comment.name}</Text>
        <Text style={styles.username}>@{comment.username}</Text>
        {/*This should be left*/}
        <Text style={styles.timestamp}>{comment.timestamp}</Text>
      </View>
      <Text style={styles.text}>{comment.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  comment: {
    paddingVertical: spacing.md,
    paddingHorizontal: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.separator,
    
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.s,
    marginBottom: spacing.s,
  },
  name: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.semibold,
    color: colors.textPrimary,
  },
  username: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.regular,
    color: colors.textSecondary,
  },
  timestamp: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.regular,
    color: colors.textSecondary,
    alignSelf: 'flex-end',
  },
  text: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.regular,
    color: colors.textPrimary,
    lineHeight: fontSize.sm * 1.5,
    marginBottom: spacing.md,
  },
});