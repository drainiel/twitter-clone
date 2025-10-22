// ============================================
// PostContent.tsx - Post text content
// ============================================
import { colors, fontSize, fontWeight, spacing } from '@/constants/theme';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface PostContentProps {
  text: string;
}

export const PostContent: React.FC<PostContentProps> = ({ text }) => {
  return <Text style={styles.content}>{text}</Text>;
};

const styles = StyleSheet.create({
  content: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.regular,
    color: colors.textPrimary,
    lineHeight: fontSize.md * 1.5,
    marginBottom: spacing.md,
  },
});