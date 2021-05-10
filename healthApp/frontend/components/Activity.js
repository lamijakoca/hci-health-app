import * as React from 'react';
import { SafeAreaView, Text, StyleSheet} from 'react-native';
import {Pedometer} from 'expo-sensors';
import { useState } from 'react/cjs/react.development';

function Activity(){
    const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
    const [pastStepCount, setPastStepCount] = useState(0);
    const [currentStepCount, setCurrentStepCount] = useState(0);

    const _subscribe = () => {
        const subscription = Pedometer.watchStepCount(result=>{
            setCurrentStepCount(result.steps)
        })
    }

    Pedometer.isAvailableAsync().then(
        result => {
            setIsPedometerAvailable(String(result))
        }
    )
    
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
        result => {
            setPastStepCount(result.steps)
        }
    )
    
    const _unsubscribe = () =>{
        setCurrentStepCount(0)
    }
    return(
        <SafeAreaView>
            {/* <Text>{Pedometer.isAvailableAsync()}: {isPedometerAvailable}</Text> */}
            <Text style={styles.text}>Steps taken in the last 24 hours: {pastStepCount}</Text>
            <Text style={styles.text2}>Walk! And watch this go up: {currentStepCount}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        marginTop: '50%',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    text2: {
        top: 10,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default Activity;