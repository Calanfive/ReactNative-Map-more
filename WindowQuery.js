import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const App = () => {
  const { width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      {width > 600 ? (
        <View style={styles.largeScreenComponent}>
          <Text>Composant pour les écrans larges</Text>
        </View>
      ) : (
        <View style={styles.smallScreenComponent}>
          <Text>Composant pour les écrans étroits</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  largeScreenComponent: {
    backgroundColor: 'lightblue',
    padding: 20,
  },
  smallScreenComponent: {
    backgroundColor: 'lightgreen',
    padding: 10,
  },
});

export default App;