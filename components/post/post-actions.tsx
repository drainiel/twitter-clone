// ============================================
// PostActions.tsx - Like and Comment buttons
// ============================================
import { colors, fontSize, fontWeight, iconSize, spacing } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);

interface PostActionsProps {
  likes: number;
  isLiked: boolean;
  onLike: () => void;
  commentCount: number;
  onComment: () => void;
}

export const PostActions: React.FC<PostActionsProps> = ({ 
  likes, 
  isLiked, 
  onLike,
  commentCount,
  onComment 
}) => {
  const likeScale = useSharedValue(1);

  useEffect(() => {
    if (isLiked) {
      likeScale.value = withTiming(1.25, { duration: 150 }, () => {
        likeScale.value = withTiming(1, { duration: 100 });
      });
    } else {
      likeScale.value = withTiming(1, { duration: 50 });
    }
  }, [isLiked, likeScale]);

  const animatedLikeStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: likeScale.value }],
    };
  });

  const formatCount = (count: number): string => {
    // Use nullish coalescing (??) to default null/undefined to 0
  const safeCount = count ?? 0;

    if (safeCount >= 1000000) {
      return `${(safeCount / 1000000).toFixed(1)}M`;
    }
    if (safeCount >= 1000) {
      return `${(safeCount / 1000).toFixed(1)}K`;
    }
    return safeCount.toString();
  };

  return (
    <View style={styles.actions}>
      <TouchableOpacity
        style={styles.actionButton}
        onPress={onComment}
        activeOpacity={0.7}
      >
        <Ionicons
          name="chatbubble-outline"
          style={styles.commentIcon}
        />
        <Text style={styles.count}>
          {formatCount(commentCount)}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={onLike}
        activeOpacity={0.7}
      >
        <AnimatedIcon
          name={isLiked ? "heart" : "heart-outline"}
          style={[
            styles.likeIcon,
            isLiked ? styles.iconActive : styles.iconInactive,
            animatedLikeStyle,
          ]}
        />
        <Text style={[styles.count, isLiked && styles.countActive]}>
          {formatCount(likes)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xl,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.s,
    paddingVertical: spacing.s,
  },
  count: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.medium,
    color: colors.textSecondary,
  },
  countActive: {
    color: colors.liked,
  },
  likeIcon: {
    fontSize: iconSize.md,
  },
  commentIcon: {
    fontSize: iconSize.md,
    color: colors.textSecondary,
  },
  iconActive: {
    color: colors.liked,
  },
  iconInactive: {
    color: colors.textSecondary,
  },
});
