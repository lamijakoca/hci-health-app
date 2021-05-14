import * as React from 'react';
import { SafeAreaView, Text, StyleSheet} from 'react-native';
import {Pedometer} from 'expo-sensors';
import { useState } from 'react/cjs/react.development';

function Activity(){
    const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
    const [pastStepCount, setPastStepCount] = useState(0);
    const [currentStepCount, setCurrentStepCount] = useState(0);
    const [sevenDays, setSevenDays] = useState(0);
    
    // const _subscribe = () => {
    //     const subscription = Pedometer.watchStepCount(result=>{
    //         setCurrentStepCount(result.steps)
    //     })
    // }
    // const _unsubscribe = () =>{
    //     setCurrentStepCount(0)
    // }

    Pedometer.watchStepCount(result => {
        setCurrentStepCount(result.steps)
    })

    Pedometer.isAvailableAsync().then(
        result => {
            setIsPedometerAvailable(String(result))
        }
    )

    const getStepsFor7Days = () => {
        const start7 = new Date();
        const end7 = new Date();
        start7.setDate(end7.getDate() - 7);
        Pedometer.getStepCountAsync(start7, end7)
                 .then(result => {
                     setSevenDays(result.steps)
                 })

    }
    const getStepsLastDay = () => {
        const end = new Date();
        const start = new Date();
        start.setDate(end.getDate() - 1);
        Pedometer.getStepCountAsync(start, end).then(
            result => {
                setPastStepCount(result.steps)
            }
        )
    }
    
    return(
        <SafeAreaView style={styles.view}>
            <Text style={styles.text2}>Is Pedometer available: {isPedometerAvailable}</Text>
            <Text style={styles.text2}>Walk! And watch this go up: {currentStepCount}</Text>
            <Text style={styles.text}>Steps taken in the last 24 hours: </Text>
            <Text style={styles.steps}>{pastStepCount}</Text>
            <Text>Steps taken in the last 7 days: {sevenDays} </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        marginTop: '40%',
        fontSize: 18,
        fontWeight: 'bold'
    },
    text2: {
        top: '30%',
        fontSize: 18,
        // fontWeight: 'bold'
    },
    steps: {
        color: 'blue',
        padding: '10%',
        fontSize: 30,
        fontWeight:'bold'
    },
    view: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    }
})

export default Activity;