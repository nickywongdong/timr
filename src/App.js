import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

      <a href="https://github.com/nickywongdong/timr/actions/workflows/timr-ci.yml">
        <img
          src="https://github.com/nickywongdong/timr/actions/workflows/timr-ci.yml/badge.svg"
          alt="timr-ci"
        />
      </a>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
