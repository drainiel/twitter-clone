// ============================================
// PostActions.tsx - Like button
// ============================================
import { colors, fontSize, fontWeight, spacing } from '@/constants/theme';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface PostActionsProps {
  likes: number;
  isLiked: boolean;
  onLike: () => void;
}

export const PostActions: React.FC<PostActionsProps> = ({ likes, isLiked, onLike }) => {
  const formatLikes = (count: number): string => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <View style={styles.actions}>
      <TouchableOpacity 
        style={styles.likeButton} 
        onPress={onLike}
        activeOpacity={0.7}
      >
        <Text style={styles.likeIcon}>{isLiked ? '❤️' : '🤍'}</Text>
        <Text style={[styles.likeCount, isLiked && styles.likeCountActive]}>
          {formatLikes(likes)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.s,
    paddingVertical: spacing.s,
  },
  likeIcon: {
    fontSize: fontSize.lg,
  },
  likeCount: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    color: colors.textSecondary,
  },
  likeCountActive: {
    color: colors.error,
  },
});
