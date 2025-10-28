import { colors, fontSize, fontWeight, spacing, markdownStyles } from '@/constants/theme';
import React from 'react';
import { StyleSheet, Platform } from 'react-native'; 
import Markdown from 'react-native-markdown-display';

/**
 * Props for the PostContent component.
 */
interface PostContentProps {
  /** The text content of the post to display.
   */
  text: string;
}

/**
 * A component that displays the main text content of a post using Markdown.
 * Renders the post text with consistent styling.
 * 
 * @param props - The component props
 * @returns A styled Markdown component displaying the post content
 */
export const PostContent: React.FC<PostContentProps> = ({ text }) => {
  // Use Markdown instead of Text
  return <Markdown style={markdownStyles}>{text}</Markdown>;
};
