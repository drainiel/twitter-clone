import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function likes() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={{ color: 'white' }}>Your liked posts here babe</Text>
        <View style={{ marginBottom: 5000 }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#161E27',
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#161E27',
    marginTop: 100,
  },
});