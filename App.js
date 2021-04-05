import React from 'react';
import StartScreen from './components/StartScreen'
import PlaySet from './components/PlaySet'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={StartScreen} options={{ title: 'Hem' }} />
        <Stack.Screen name="PlaySet" component={PlaySet} options={{ title: null }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

