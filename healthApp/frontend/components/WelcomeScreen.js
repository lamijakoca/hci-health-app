import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

function WelcomeScreen({navigation}){
    return(
        <SafeAreaView>
            <Text style={styles.stil}>HealthApp is always here for you!</Text> 
            <Button title="Get started!" onPress={()=> navigation.push("SignIn")} style={styles.dugme}/>
        </SafeAreaView>
    );
}

const styles = {
    sve: {
        backgroundColor: 'red',
    },
    stil: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    dugme: {
        alignItems: 'center',
        height: 90,
        width: 200,
        marginTop: '50%',
        marginLeft: '23%',
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 40,
    }
}

export default WelcomeScreen;