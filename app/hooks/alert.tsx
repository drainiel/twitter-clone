// alert.tsx
import { Alert, AlertButton } from 'react-native';

interface ConfirmationAlertProps {
  title: string;
  message: string;
  confirmButtonText?: string; // Optional, defaults to 'Confirm'
  onConfirm: () => void;
  cancelButtonText?: string; // Optional, defaults to 'Cancel'
}

const useConfirmationAlert = () => {
  const showConfirmationAlert = ({
    title,
    message,
    confirmButtonText = 'Confirm', // Default confirm button text
    onConfirm,
    cancelButtonText = 'Cancel', // Default cancel button text
  }: ConfirmationAlertProps) => {
    const buttons: AlertButton[] = [
      {
        text: cancelButtonText,
        style: 'cancel',
      },
      {
        text: confirmButtonText,
        onPress: onConfirm,
        style: 'destructive', // destructive style for confirmation
      },
    ];

    Alert.alert(title, message, buttons, { cancelable: true });
  };

  return { showConfirmationAlert };
};

export default useConfirmationAlert;