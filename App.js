import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <LoginPage/>
      {/* <Stack.Navigator> */}
        {/* <Stack.Screen name="Home" component={HomePage} /> */}
        {/* <Stack.Screen name="" component={LoginPage} /> */}
      {/* </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
