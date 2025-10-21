import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  TextInput as RNTextInput,
  StyleSheet,
  Text,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';

interface CustomTextInputProps extends TextInputProps {
  icon?: keyof typeof Ionicons.glyphMap;
  onIconPress?: () => void;
  label?: string;
}

export default function TextInput({
  icon,
  onIconPress,
  label,
  style,
  ...props
}: CustomTextInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.wrapper}>
      {label && (
        <Text style={styles.label}>{label}</Text>
      )}
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
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
  },
  label: {
    color: '#93A5B7',
    fontSize: 14,
    marginBottom: 8,
    fontWeight: '600',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E2936',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 45,
    borderWidth: 1,
    borderColor: '#1E2936',
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
    color: '#93A5B7',
    fontSize: 15,
    padding: 0,
  },
});