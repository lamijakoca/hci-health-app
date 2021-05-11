import * as React from 'react';
import { SafeAreaView, Text, StyleSheet} from 'react-native';
import {Pedometer} from 'expo-sensors';
import { useState } from 'react/cjs/react.development';
import ProgressCircle from 'react-native-progress-circle';

function Activity(){
    const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
    const [pastStepCount, setPastStepCount] = useState(0);
    const [currentStepCount, setCurrentStepCount] = useState(0);

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
    
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
        result => {
            setPastStepCount(result.steps)
        }
    )
    
    return(
        <SafeAreaView style={styles.view}>
            <Text style={styles.text2}>Is Pedometer available: {isPedometerAvailable}</Text>
            <Text style={styles.text}>Steps taken in the last 24 hours: </Text>
            <ProgressCircle
                percent={50}
                radius={50}
                borderWidth={10}
                color="#3399ff"
                shadowColor="999"
                bgColor="white">
            <Text style={styles.steps}>{pastStepCount}</Text>
           </ProgressCircle> 
            <Text style={styles.text2}>Walk! And watch this go up: {currentStepCount}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        marginTop: '40%',
        fontSize: 18,
        // fontWeight: 'bold'
    },
    text2: {
        top: 10,
        fontSize: 18,
        fontWeight: 'bold'
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