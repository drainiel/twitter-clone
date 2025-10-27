import { colors, fontSize, fontWeight, spacing, separator } from '@/constants/theme';
import { Comment as CommentType } from '@/types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Props for the Comment component.
 */
interface CommentProps {
  /** The comment data object containing author information, text content, and timestamp.
   */
  comment: CommentType;
}

/**
 * A component that displays a single comment with author information and content.
 * Shows the commenter's name, username (with @ prefix), timestamp, and comment text
 * in a structured layout with a bottom border separator.
 *
 * @param props - The component props
 * @returns A styled comment card with header and text content
 */
export const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <View style={styles.comment}>
      <View style={styles.header}>
        <Text style={styles.name}>{comment.name}</Text>
        <Text style={styles.username}>@{comment.username}</Text>
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
    borderBottomWidth: separator.small,
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
    marginLeft: 'auto',
  },
  text: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.regular,
    color: colors.textPrimary,
    lineHeight: fontSize.sm * 1.5,
    marginBottom: spacing.md,
  },
});