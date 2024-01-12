import { Platform, StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MapScreen from './Map';
import LocationScreen from './Location';
import ImagePickerScreen from './ImagePicker';

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
          <Tab.Screen name ="Location" component={LocationScreen} />
          {/* <Tab.Screen name ="WindowQuery" component={WindowQueryScreen} /> */}
          <Tab.Screen name ="Image" component={ImagePickerScreen} />

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
