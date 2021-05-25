import { Container, Icon, Input, Item, Label, Button} from 'native-base';
import React, {useState} from 'react';
import { ImageBackground, Text, StyleSheet, SafeAreaView } from 'react-native';
import * as SecureStore from 'expo-secure-store';


function Measurements({navigation}){
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();

    const setMeasure = async(key, measure) => {
        return await SecureStore.setItemAsync(key, measure)
    }

    return(
        <Container>
            <ImageBackground style={styles.background} source={require("../img/bodySilhouette.jpg")}>
                <Text style={styles.text}>
                    Body Measurements Tracker
                </Text>
                <SafeAreaView style={styles.sview}>
                    <Item floatingLabel style={styles.item}>
                        <Label style={styles.labela}>Height</Label>
                        <Input 
                        style={styles.input} 
                        value={height}
                        onChangeText={setHeight} 
                        />
                    </Item>
                    <Item floatingLabel >
                        <Label style={styles.labela}>Weight</Label>
                        <Input 
                        style={styles.input}
                        value={weight}
                        onChangeText={setWeight}
                        />
                    </Item>
                    <Button 
                        iconLeft 
                        bordered 
                        dark 
                        style={styles.saveBtn}
                        onPress={() => {
                            setMeasure("weight", JSON.stringify(weight));
                            setMeasure("height", JSON.stringify(height));
                            navigation.push('Home')
                        }}
                    >
                        <Icon name='add' style={styles.saveIcon} />
                        <Text>Save</Text>
                    </Button>
                </SafeAreaView>
            </ImageBackground>
        </Container>
    )
}

const styles = StyleSheet.create({
    background: {
        width: "70%",
        height: "100%",
        top: 20,
    },
    text: {
        marginRight: 0,
        textAlign: "right",
        alignSelf:'flex-end',
        right: 0,
        bottom: 5,
        left: 90,
        top: '10%',
        fontWeight: 'bold',
        fontSize: 15
    },
    sview: {
        width: "60%",
        left: 200,
        top: 120,
    },
    item: {
        bottom: 15,

    },
    labela: {
        textAlign: 'center',
        alignSelf: 'center'
    },
    input: {
        textAlign: 'center'
    },
    saveBtn: {
        padding: 10,
        top: 25,
        alignSelf: 'center'
    },
    saveIcon: {
        right: 10
    }
})
export default Measurements;