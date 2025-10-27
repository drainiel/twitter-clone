import { colors, spacing } from '@/constants/theme';
import { Post as PostType } from '@/types';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { CommentModal } from '../comment/commentModal';
import { PostActions } from './post-actions';
import { PostContent } from './post-content';
import { PostHeader } from './post-header';

/**
 * Props for the Post component.
 */
interface PostProps {
  /** The post data object containing all post information (author, content, likes, comments, etc.).
   */
  post: PostType;
}

/**
 * A complete post component that combines header, content, and action elements.
 * Manages the post's interactive state including likes, comments, and comment modal visibility.
 * Handles like toggling (increment/decrement) and adding new comments to the post.
 *
 * The component maintains local state for:
 * - Like status and count
 * - Comments array and count
 * - Comment modal visibility
 *
 * @param props - The component props
 * @returns A complete post card with header, content, actions, and comment modal
 */
export const Post: React.FC<PostProps> = ({ post }) => {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);
  const [commentCount, setCommentCount] = useState(post.commentCount);
  const [showComments, setShowComments] = useState(false);

  /**
   * Handles the like button press by toggling the like state and updating the like count.
   * Decrements the count if already liked, increments if not liked.
   */
  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  /**
   * Handles adding a new comment to the post.
   * Creates a new comment object with the provided text and adds it to the comments array.
   * Increments the comment count.
   *
   * @param text - The text content of the new comment
   */
  const handleAddComment = (text: string) => {
    const newComment = {
      id: Date.now().toString(),
      name: 'Current User',
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
    </View>
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
  postContent: {
    marginHorizontal: spacing.xxl,
  }
});