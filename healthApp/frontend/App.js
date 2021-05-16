import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Home from './components/Home';
import Browse from './components/Browse';
import Activity from './components/Activity';
import Symptoms from './components/Symptoms';
import Note from './components/Note';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn}/> 
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Browse" component={Browse}/>
        <Stack.Screen name="Activity" component={Activity}/>
        <Stack.Screen name="Symptoms" component={Symptoms}/>
        <Stack.Screen name="Note" component={Note}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}