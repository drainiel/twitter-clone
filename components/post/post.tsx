// ============================================
// Post.tsx - Main post component
// ============================================
import { colors, spacing } from '@/constants/theme';
import { Post as PostType } from '@/types';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { CommentModal } from '../comment/commentModal';
import { PostActions } from './post-actions';
import { PostContent } from './post-content';
import { PostHeader } from './post-header';
interface PostProps {
  post: PostType;
}

export const Post: React.FC<PostProps> = ({ post }) => {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);
  const [commentCount, setCommentCount] = useState(post.commentCount);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };
  const handleAddComment = (text: string) => {
    const newComment = {
      id: Date.now().toString(),
      name: 'Current User', // Replace with actual user
      username: 'currentuser',
      text,
      timestamp: 'now',
    };
    setComments([...comments, newComment]);
    setCommentCount(commentCount + 1);
  };

  return (
    <View style={styles.post}>
      <View style={styles.postContent}>
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
          commentCount={commentCount}
          onComment={() => setShowComments(true)}
        />
      </View>
      <CommentModal
        visible={showComments}
        onClose={() => setShowComments(false)}
        comments={comments}
        onAddComment={handleAddComment}
        postAuthor={post.name}
      />
    </View >
  );
};

const styles = StyleSheet.create({
  post: {
    backgroundColor: colors.background,
    padding: spacing.sm,
    marginBottom: spacing.md,
    borderColor: colors.separator,
    borderBottomWidth: 0.5,
    marginHorizontal: -spacing.sm,
  },
  postContent:{
    marginHorizontal: spacing.xxl,
  }
});
