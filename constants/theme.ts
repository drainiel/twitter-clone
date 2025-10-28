/**
 * theme.ts - centralized theme configuration
 */
import { StyleSheet, Platform } from 'react-native';

export const colors = {
  // Primary colors
  primary: '#208BFE',
  primaryLight: '#4DA3FF',
  
  // Background colors
  background: '#161E27',
  backgroundSecondary: '#1E2936',
  backgroundTertiary: '#2A3845',
  
  // Text colors
  textPrimary: '#FFFFFF',
  textSecondary: '#93A5B7',
  textTertiary: '#788EA5',
  textPlaceholder: '#788EA5',
  
  // Status colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#E60B3E',
  
  // UI elements
  border: '#1E2936',
  borderFocus: '#208BFE',
  handleBar: '#3A4A5A',
  separator: '#284254',

  // Likes color
  liked: '#FF329B',
  notLiked: '#2A3845',
  
  // Opacity variants (useful for overlays)
  overlay: 'rgba(0, 0, 0, 0.6)',
  overlayLight: 'rgba(0, 0, 0, 0.3)',
} as const;

export const spacing = {
  xs: 4,
  s: 8,
  sm: 10,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 32,
  loginscreenMarginTop: 90,
} as const;

export const borderRadius = {
  sm: 8,
  md: 10,
  lg: 12,
  xl: 16,
  xxl: 20,
  full: 9999,
} as const;

export const fontSize = {
  xs: 12,
  sm: 14,
  md: 15,
  lg: 16,
  xl: 18,
  xxl: 20,
  xxxl: 24,
} as const;

export const fontWeight = {
  regular: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
};

export const iconSize = {
  md: 18, 
  lg: 20,
  bigLogo: 120, // used in index as main logo
} as const;

// Combined theme object (optional, for convenience)
export const theme = {
  colors,
  spacing,
  borderRadius,
  fontSize,
  fontWeight,
} as const;

// Useful to change separator widht in all screen at once
export const separator = {
  small : 0.5,
} as const;

/**
 * Shared styles for react-native-markdown-display.
 * Covers body text, bold, italic, and strikethrough.
 */
export const markdownStyles = StyleSheet.create({
  body: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.regular,
    color: colors.textPrimary,
    lineHeight: fontSize.md * 1.5, // Base line height
    marginBottom: spacing.md,
  },
  bold: { // Style for **bold**
    fontWeight: 'bold', // Use named weight 'bold'
  },
  italic: { // Style for _italic_ or *italic*
    fontStyle: 'italic',
  },
  strikethrough: { // Style for ~~strikethrough~~
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: colors.textSecondary,
  },
});

// Type exports for TypeScript
export type Colors = typeof colors;
export type Spacing = typeof spacing;
export type BorderRadius = typeof borderRadius;
export type FontSize = typeof fontSize;
export type FontWeight = typeof fontWeight;
export type Theme = typeof theme;
export type IconSize = typeof iconSize;
export type MarkdownStyles = typeof markdownStyles;