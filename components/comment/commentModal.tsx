import { colors, spacing } from '@/constants/theme';
import { Comment as CommentType } from '@/types';
import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../button';
import { CommentInput } from './commentInput';
import { CommentList } from './commentList';

/**
 * Props for the CommentModal component.
 */
interface CommentModalProps {
  /** Whether the modal is visible.
   */
  visible: boolean;

  /** Callback function invoked when the modal should be closed.
   */
  onClose: () => void;

  /** Array of existing comments to display in the modal.
   */
  comments: CommentType[];

  /** Callback function invoked when a new comment is submitted.
   * @param text - The text content of the new comment
   */
  onAddComment: (text: string) => void;
  
  /** The name of the post author, used in the input placeholder.
   */
  postAuthor: string;
}

/**
 * A full-screen modal component for viewing and adding comments to a post.
 * Features a header with Cancel and Reply buttons, a scrollable list of existing comments,
 * and an input field for composing new comments. The Reply button is disabled when the
 * input is empty. Clears the input text when the modal is closed or a comment is submitted.
 *
 * @param props - The component props
 * @returns A full-screen modal with comment list and input interface
 */
export const CommentModal: React.FC<CommentModalProps> = ({
  visible,
  onClose,
  comments,
  onAddComment,
  postAuthor
}) => {

  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text.trim()) {
      onAddComment(text.trim());
      setText('');
    }
  };
 
  // Wrapper for onClose to also clear text
  const handleClose = () => {
    setText(''); // Clear text on close
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={false}
      onRequestClose={handleClose}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Button
            title="Cancel"
            variant="text"
            onPress={handleClose} 
          />
          <Button
            title="Reply"
            shape="pill"
            variant='primary'
            onPress={handleSubmit} 
            disabled={!text.trim()} 
          />
        </View>
        <CommentList comments={comments} />

        <CommentInput
          value={text} // Pass state down
          onChangeText={setText} // Pass setter down
          placeholder={`Reply to ${postAuthor}...`}
        />
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.xl,
    marginTop: spacing.xl,
    marginBottom: -spacing.xl,
  },
});