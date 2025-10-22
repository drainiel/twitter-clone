// ============================================
// PostHeader.tsx - Name, username, and time
// ============================================
import { colors, fontSize, fontWeight, spacing } from '@/constants/theme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface PostHeaderProps {
  name: string;
  username: string;
  timestamp: string;
}

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
