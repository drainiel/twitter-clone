// ============================================
// Post.tsx - Main post component
// ============================================
import { borderRadius, colors, spacing } from '@/constants/theme';
import { Post as PostType } from '@/types';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { PostActions } from './post-actions';
import { PostContent } from './post-content';
import { PostHeader } from './post-header';

interface PostProps {
  post: PostType;
}

export const Post: React.FC<PostProps> = ({ post }) => {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  return (
    <View style={styles.post}>
      <PostHeader 
        name={post.name}
        username={post.username}
        timestamp={post.timestamp}
      />
      <PostContent text={post.text} />
      <PostActions 
        likes={likes}
        isLiked={isLiked}
        onLike={handleLike}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    backgroundColor: colors.background,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
});
