import { colors, fontSize, fontWeight } from '@/constants/theme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface CharacterCountDisplayProps {
  currentLength: number;
  maxLength: number;
}

const CharacterCountDisplay: React.FC<CharacterCountDisplayProps> = ({
  currentLength,
  maxLength,
}) => {
  const remainingChars = maxLength - currentLength;
  const isError = remainingChars < 0;

  return (
    <View style={styles.container}>
      <Text style={styles.charactersLeft}>Characters left</Text>
      <Text
        style={[
          styles.characterCount,
          isError && styles.characterCountError,
        ]}
      >
        {remainingChars}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  charactersLeft: {
    color: colors.primary,
    fontSize: fontSize.sm,
    fontWeight: fontWeight.semibold,
  },
  characterCount: {
    color: colors.textPrimary,
    fontSize: fontSize.md,
    fontWeight: fontWeight.medium,
  },
  characterCountError: {
    color: colors.error,
  },
});

export default CharacterCountDisplay;