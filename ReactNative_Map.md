# Setup React Native with Expo for both Android and iOS
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/material-bottom-tabs react-native-paper react-native-vector-icons
npm install @react-navigation/bottom-tabs

import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MapScreen from './Map';

const Tab = Platform.OS === 'android' 
  ? createMaterialBottomTabNavigator() 
  : createBottomTabNavigator();

const HomeScreen = () => {
  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home!</Text>
  </View>;
}

const SettingsScreen = () => {
  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Settings!</Text>
  </View>;
}


export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name ="Map" component={MapScreen} />
        </Tab.Navigator>
    </NavigationContainer>
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

# Affichage Map Google
https://github.com/react-native-maps/react-native-maps

npx expo install react-native-maps

import React from 'react';
import MapView from 'react-native-maps';
import { SafeAreaView, StyleSheet, View } from 'react-native';

export default function MapScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <MapView style={styles.map} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

## Doc config API Google Map
https://github.com/react-native-maps/react-native-maps?tab=readme-ov-file

### SafeAreaContext
npx expo install react-native-safe-area-context

import {SafeAreaView} from 'react-native-safe-area-context';

export default function MapScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <MapView style={styles.map} region={
            {
            latitude: 45.18825,
            longitude: 5.7324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }
        }>

        </MapView>
    </SafeAreaView>
  );
}

## Location 
npx expo install expo-location
