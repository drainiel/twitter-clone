// ============================================
// CommentModal.tsx - Modal to show comments
// ============================================
import { colors, fontSize, fontWeight, spacing } from '@/constants/theme';
import { Comment as CommentType } from '@/types';
import React from 'react';
import {
    Modal,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
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
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={false}
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Comments</Text>
          <View style={styles.placeholder} />
        </View>
        
        <CommentList comments={comments} />
        
        <CommentInput 
          onSubmit={onAddComment}
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
    padding: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  closeButton: {
    padding: spacing.s,
  },
  closeText: {
    fontSize: fontSize.xl,
    color: colors.textPrimary,
    fontWeight: fontWeight.medium,
  },
  title: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    color: colors.textPrimary,
  },
  placeholder: {
    width: 40,
  },
});