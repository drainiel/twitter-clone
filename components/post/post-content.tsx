import { colors, fontSize, fontWeight, spacing } from '@/constants/theme';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

/**
 * Props for the PostContent component.
 */
interface PostContentProps {
  /** The text content of the post to display.
   */
  text: string;
}

/**
 * A component that displays the main text content of a post.
 * Renders the post text with consistent styling, font size,
 * weight, color, and line height.
 *
 * @param props - The component props
 * @returns A styled text component displaying the post content
 */
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