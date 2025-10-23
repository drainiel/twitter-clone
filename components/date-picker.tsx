// ============================================
// date-picker.tsx 
// ============================================
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import {
    Animated,
    Modal,
    PanResponder,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { borderRadius, colors, fontSize, fontWeight, iconSize, spacing } from '../constants/theme';
import Button from './button';

interface DatePickerProps {
    label?: string;
    value: Date;
    onChange: (date: Date) => void;
    placeholder?: string;
    icon?: keyof typeof Ionicons.glyphMap;
    maximumDate?: Date;
    minimumDate?: Date;
}

export default function DatePicker({
    label,
    value,
    onChange,
    placeholder = 'Select date',
    icon = 'calendar',
    maximumDate,
    minimumDate,
}: DatePickerProps) {
    const [showPicker, setShowPicker] = useState(false);
    const [slideAnim] = useState(new Animated.Value(0));
    const [pan] = useState(new Animated.Value(0));

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: (_, gestureState) => {
            return gestureState.dy > 5;
        },
        onPanResponderMove: (_, gestureState) => {
            if (gestureState.dy > 0) {
                pan.setValue(gestureState.dy);
            }
        },
        onPanResponderRelease: (_, gestureState) => {
            if (gestureState.dy > 100) {
                closePicker();
            } else {
                Animated.spring(pan, {
                    toValue: 0,
                    useNativeDriver: true,
                }).start();
            }
        },
    });

    const formatDate = (date: Date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const handleDateChange = (event: any, selectedDate?: Date) => {
        if (selectedDate) {
            onChange(selectedDate);
        }
    };

    const openPicker = () => {
        setShowPicker(true);
        pan.setValue(0);
        Animated.spring(slideAnim, {
            toValue: 1,
            useNativeDriver: true,
            tension: 65,
            friction: 11,
        }).start();
    };

    const closePicker = () => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 250,
            useNativeDriver: true,
        }).start(() => {
            setShowPicker(false);
            pan.setValue(0);
        });
    };

    const translateY = Animated.add(
        slideAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [500, 0],
        }),
        pan
    );

    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}

            <TouchableOpacity
                style={styles.dateButton}
                onPress={openPicker}
                activeOpacity={0.7}
            >
                <Ionicons name={icon} size={iconSize.lg} color={colors.textSecondary} />
                <Text style={styles.dateText}>
                    {value ? formatDate(value) : placeholder}
                </Text>
            </TouchableOpacity>

            <Modal
                visible={showPicker}
                transparent
                animationType="fade"
                onRequestClose={closePicker}
            >
                <TouchableOpacity
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPress={closePicker}
                >
                    <Animated.View
                        style={[
                            styles.pickerContainer,
                            { transform: [{ translateY }] }
                        ]}
                        {...panResponder.panHandlers}
                    >
                        <View style={styles.pickerHeader}>
                            <View style={styles.handleBar} />
                        </View>

                        <View style={styles.pickerWrapper}>
                            <DateTimePicker
                                value={value || new Date()}
                                mode="date"
                                display="spinner"
                                onChange={handleDateChange}
                                maximumDate={maximumDate}
                                minimumDate={minimumDate}
                                textColor={colors.textPrimary}
                                themeVariant="dark"
                                style={styles.picker}
                            />
                        </View>

                        <View style={styles.buttonContainer}>
                            <Button
                                title="Done"
                                onPress={closePicker}
                            />
                        </View>
                    </Animated.View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: fontSize.xxl,
    },
    label: {
        fontSize: fontSize.sm,
        color: colors.textSecondary,
        marginBottom: spacing.s,
        fontWeight: fontWeight.medium,
    },
    dateButton: {
        backgroundColor: colors.backgroundSecondary,
        borderRadius: borderRadius.sm,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        paddingVertical: 12,
        gap: 12,
    },
    dateText: {
        color: colors.textSecondary,
        fontSize: fontSize.md,
        flex: 1,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: colors.overlay,
        justifyContent: 'flex-end',
    },
    pickerContainer: {
        backgroundColor: colors.background,
        borderTopLeftRadius: fontSize.xxl, 
        borderTopRightRadius: fontSize.xxl,
        paddingBottom: 40,
    },
    pickerHeader: {
        alignItems: 'center',
        paddingTop: 12,
        paddingBottom: 8,
    },
    handleBar: {
        width: 40,
        height: 4,
        backgroundColor: colors.handleBar,
        borderRadius: 2,
    },
    pickerWrapper: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: spacing.sm,
    },
    picker: {
        width: '100%', 
        height: 200,
    },
    buttonContainer: {
        marginTop: spacing.sm,
        paddingHorizontal: 20,
    },
});