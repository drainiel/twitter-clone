// ============================================
// PostActions.tsx - Like button
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
}

export const PostActions: React.FC<PostActionsProps> = ({ likes, isLiked, onLike }) => {
  // Create a shared value for the scale
  const scale = useSharedValue(1);

  // Define the animation logic to run when 'isLiked' prop changes
  useEffect(() => {
    if (isLiked) {
      // Use withTiming for a fast, direct "pop"
      // Animate up quickly
      scale.value = withTiming(1.25, { duration: 150 }, () => {
        // Settle back down quickly
        scale.value = withTiming(1, { duration: 100 });
      });
    } else {
      // Snap back to 1 instantly when unliked
      scale.value = withTiming(1, { duration: 50 });
    }
  }, [isLiked, scale]); // Re-run when isLiked changes

  // Create the animated style object
  const animatedIconStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

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
        <AnimatedIcon
          name={isLiked ? "heart" : "heart-outline"}
          style={[
            styles.likeIcon,
            isLiked ? styles.iconActive : styles.iconInactive,
            animatedIconStyle, 
          ]}
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