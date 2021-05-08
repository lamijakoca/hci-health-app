import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, SafeAreaView, Button, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './components/WelcomeScreen';
import SignIn from './components/SignIn';

const Stack = createStackNavigator();

export default function App() {
  return (
    // <SafeAreaView>
    //   <Button title="Click me!" styles={myStyle}
    //   onPress={()=> Alert.prompt('My title', 'My message', 
    //   (text) => console.log(text))}/>    
    // </SafeAreaView>
    // <SafeAreaView>
    //   <WelcomeScreen/>
    // </SafeAreaView>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="SignIn" component={SignIn}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const myStyle = {
  backgroundColor: "blue"
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
