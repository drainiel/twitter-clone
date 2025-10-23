// ============================================
// PostActions.tsx - Like button
// ============================================
import { colors, fontSize, fontWeight, iconSize, spacing } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
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
        <Ionicons 
        name={isLiked ? "heart" : "heart-outline"} 
        style={[styles.likeIcon, isLiked ? styles.iconActive : styles.iconInactive]}
        />
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
  likeCount: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.medium,
    color: colors.textSecondary,
  },
  likeCountActive: {
    color: colors.liked, 
  },
  likeIcon: {
    fontSize: iconSize.md,
  },
  iconActive:{
    color: colors.liked,
  },
  iconInactive:{
    color: colors.textSecondary,
  }
});
