import axios from 'axios';
import { Container, Content, Header, Icon, Input, Item,} from 'native-base';
import React, { useState } from 'react';
import { Text, StyleSheet, Image } from 'react-native';

function Nutrition() {
    const [kcal, setKcal] = useState(0);
    const [food, setFood] = useState();
    // const app_id = "82c14b37";
    // const app_key = "8120b63b64eecbf49ff78e07d1c1bf4a	";
    const api = `https://api.edamam.com/api/food-database/v2/parser?ingr=${food}&app_id=82c14b37&app_key=8120b63b64eecbf49ff78e07d1c1bf4a	`
    const getFoodDetails = async () => {
        axios.get(api)
            .then((res) => {
                const kcal = res.data.parsed[0].food.nutrients.ENERC_KCAL;
                setKcal(kcal)
            })
    }
    return(
        <Container>
            <Header style={styles.header}>
                <Image style={styles.logo} source={require('../img/logo.png')}/>
            </Header>
            <Content style={styles.content}>
                <Text onPress={getFoodDetails} style={styles.text}>
                    Be careful! 
                    It takes five minutes to consume 500 calories. 
                    It takes two hours to burn them off.
                </Text>
                <Item style={styles.item}>
                    <Icon style={styles.icon} name="nutrition"/>
                    <Input 
                    value={food}
                    autoCapitalize="none"
                    onChangeText={setFood}
                    style={styles.input}
                    placeholder="Search your food..."/>
                </Item>
                <Text style={styles.txtKcal}>
                    Your choice today: {kcal} kcal
                </Text>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderBottomColor: '#fff',
        height: '25%',
    },
    logo: {
        top: '-20%'
    },
    content: {
        top: '10%'
    },
    text: {
        padding: '10%',
        fontWeight: "600",
        fontSize: 14

    },
    item: {
        width: '70%',
        alignSelf: 'center',
        textAlign: 'center',
        alignContent:'center'
    },
    input: {
        textAlign: 'center',
    },
    icon: {
        left: 30
    },
    txtKcal:{
        alignSelf: 'center',
        top: 30,
        fontSize: 15
    }
})
export default Nutrition;