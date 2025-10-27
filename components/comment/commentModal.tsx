// ============================================
// CommentModal.tsx - Modal to show comments
// ============================================
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

interface CommentModalProps {
  visible: boolean;
  onClose: () => void;
  comments: CommentType[];
  onAddComment: (text: string) => void;
  postAuthor: string;
}


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