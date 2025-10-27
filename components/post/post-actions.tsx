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

/**
 * Props for the PostActions component.
 */
interface PostActionsProps {
  /** The number of likes on the post.
   */
  likes: number;
  /** Whether the current user has liked the post.
   */
  isLiked: boolean;
  /** Callback function invoked when the like button is pressed.
   */
  onLike: () => void;
  /** The number of comments on the post.
   */
  commentCount: number;
  /** Callback function invoked when the comment button is pressed.
   */
  onComment: () => void;
}

/**
 * A component that displays interactive action buttons for a post (like and comment).
 * Features an animated heart icon that scales when liked, and formatted count displays
 * that abbreviate large numbers (e.g., 1.5K, 2.3M). The like button changes color and
 * icon style based on the liked state.
 *
 * @param props - The component props
 * @returns A React component with like and comment action buttons
 */
export const PostActions: React.FC<PostActionsProps> = ({ 
  likes, 
  isLiked, 
  onLike,
  commentCount,
  onComment 
}) => {
  /**
   * Shared value for controlling the scale animation of the like icon.
   */
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

  /**
   * Animated style that applies the scale transformation to the like icon.
   */
  const animatedLikeStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: likeScale.value }],
    };
  });

  /**
   * Formats a number count into a human-readable string with K/M suffixes.
   * Converts large numbers to abbreviated format (e.g., 1500 → "1.5K", 2000000 → "2.0M").
   *
   * @param count - The number to format
   * @returns Formatted string representation of the count
   */
  const formatCount = (count: number): string => {
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