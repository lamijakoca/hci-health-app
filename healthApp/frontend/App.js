import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Measurements from './components/Measurements';
import Nutrition from './components/Nutrition';
import Register from './components/Register';
import Activity from './components/Activity';
import Symptoms from './components/Symptoms';
import Browse from './components/Browse';
import SignIn from './components/SignIn';
import Sleep from './components/Sleep';
import Home from './components/Home';
import Note from './components/Note';
import React, {useState, useEffect} from 'react';
import * as SecureStore from 'expo-secure-store';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function App() {
  const [token, setToken] = useState('');

  const getToken = async() => {
    const token = await SecureStore.getItemAsync("token");
    setToken(token);
  }

  useEffect(() => {
    getToken();
  }, [])

  return (
    <NavigationContainer>
      {token ? 
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Browse" component={Browse}/>
        <Stack.Screen name="Activity" component={Activity}/>
        <Stack.Screen name="Symptoms" component={Symptoms}/>
        <Stack.Screen name="Note" component={Note}/>
        <Stack.Screen name="Nutrition" component={Nutrition}/>
        <Stack.Screen name="Sleep" component={Sleep}/>
        <Stack.Screen name="Measurements" component={Measurements}/>
      </Stack.Navigator> : 
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn}/>  
        <Stack.Screen name="Register" component={Register}/>
      </Stack.Navigator>}
      
    </NavigationContainer>
  );
}