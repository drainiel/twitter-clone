import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';

interface CustomTextInputProps extends TextInputProps {
  icon?: keyof typeof Ionicons.glyphMap;
  onIconPress?: () => void;
}

export default function TextInput({
  icon,
  onIconPress,
  style,
  ...props
}: CustomTextInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      style={[
        styles.container,
        isFocused && styles.containerFocused,
      ]}
    >
      {icon && (
        <TouchableOpacity
          onPress={onIconPress}
          disabled={!onIconPress}
          style={styles.iconContainer}
        >
          <Ionicons 
            name={icon} 
            size={20} 
            color={isFocused ? "#208BFE" : "#788EA5"} 
            />
        </TouchableOpacity>
      )}

      <RNTextInput
        style={styles.input}
        placeholderTextColor="#788EA5"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E2936',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 45,
    borderWidth: 1,
    borderColor: '#1E2936',
    marginBottom: 10,
  },
  containerFocused: {
    borderColor: '#208BFE',
    borderWidth: 2,
  },
  iconContainer: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
    padding: 0,
  },
});