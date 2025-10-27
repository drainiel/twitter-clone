import { colors, fontSize, fontWeight, spacing } from '@/constants/theme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Props for the PostHeader component.
 */
interface PostHeaderProps {
  /** The display name of the post author.
   */
  name: string;
  /** The username/handle of the post author (without @ prefix).
   */
  username: string;
  /**
   * The timestamp or relative time string for when the post was created.
   */
  timestamp: string;
}

/**
 * A component that displays the header information for a post.
 * Shows the author's name, username (with @ prefix), and post timestamp.
 * Name and username are grouped on the left, timestamp is aligned to the right.
 *
 * @param props - The component props
 * @returns A React component displaying post header information
 */
export const PostHeader: React.FC<PostHeaderProps> = ({ name, username, timestamp }) => {
  return (
    <View style={styles.header}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.username}>@{username}</Text>
      </View>
      <Text style={styles.timestamp}>{timestamp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.s,
    flex: 1,
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
  },
});