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
        return `${month}/${day}/${year}`;
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
                <Ionicons name={icon} size={20} color="#93A5B7" />
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
                                textColor="#FFFFFF"
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
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        color: '#93A5B7',
        marginBottom: 8,
        fontWeight: '600',
    },
    dateButton: {
        backgroundColor: '#1C2733',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 14,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    dateText: {
        color: '#93A5B7',
        fontSize: 15,
        flex: 1,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        justifyContent: 'flex-end',
    },
    pickerContainer: {
        backgroundColor: '#161E27',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
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
        backgroundColor: '#3A4A5A',
        borderRadius: 2,
    },
    pickerWrapper: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    picker: {
        width: '100%',
        height: 200,
    },
    buttonContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
});