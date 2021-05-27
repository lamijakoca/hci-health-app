import { Button, Header, Container, Content, Footer, FooterTab, Icon, ListItem, List } from 'native-base';
import {Alert, StyleSheet, Text, ScrollView} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import React, {useState, useEffect} from 'react';

function Home({navigation}){
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);

    const getMeasure = async (key) => {
        return await SecureStore.getItemAsync(key);
    }
    const fetchWeight = async() => {
        const kg = await getMeasure("weight");
        setWeight(kg)
    };

    const fetchHeight = async() => {
        const hi = await getMeasure("height");
        setHeight(hi);
    }

    useEffect(()=>{
        fetchWeight();
        fetchHeight();
    }, [])

    return(
        <Container>
            <Header style={styles.header}>
                <Icon name="person" style={styles.person}/>
            </Header>
            <Content>
                <List style={styles.lista}>
                    <ListItem style={styles.lista}>
                        <Text>
                            Date of birth: September 7, 1999
                        </Text>
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <Text>
                            Location: Novi Pazar
                        </Text>
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <Text>
                            {/* moraju ovi navodnici da se sklone */}
                            Weight: {JSON.parse(weight)}
                        </Text>
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <Text>
                            Height: {JSON.parse(height)}
                        </Text>
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <Text>
                            Mobile: +381 63 894 30 25
                        </Text>
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <Text>
                            E-mail: klamija99@gmail.com
                        </Text>
                    </ListItem>
                </List>
                <ScrollView>
                    <Text style={styles.history}>Medical History</Text>
                    <Text style={styles.historytext}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in 
                    </Text>
                    <Button 
                    bordered 
                    danger 
                    style={styles.logout}
                    onPress={async() => {
                        await SecureStore.deleteItemAsync("token");
                        Alert.alert(
                            "Logout" , 
                            "Are you sure you want to logout?", 
                            [
                                {text:"Cancel",  style:"cancel"}, 
                                {text: "Yes", onPress: () => navigation.push('SignIn')}
                            ]
                        )
                    }} >
                        <Text style={styles.btntxt}>
                            Logout
                        </Text>
                    </Button>
                </ScrollView>
            </Content>
            <Footer>
                <FooterTab>
                    <Button>
                        <Icon name="pulse"/>
                    </Button>
                    <Button onPress={() => navigation.push('Browse')}>
                        <Icon name="apps"/>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    )
}
const styles = StyleSheet.create({
    header:{
       top: '5%',
       marginBottom: '15%',
       backgroundColor: '#fff',
       justifyContent: 'center',
    //    padding: '10%',
       display:'flex',
    //    borderBottomColor: '#fff'
    },
    history: {
        marginTop: '15%',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
        paddingLeft: 10
    },
    historytext: {
        padding: 10
    },
    person: {
        height: 50,
        marginBottom: '10%'
    },
    logout: {
        
        alignSelf:'center',
        justifyContent: 'center',
        width: 150,
        borderLeftWidth: 3,
        borderTopWidth: 3,
        borderRightWidth: 3,
        borderBottomWidth: 3
    },
    btntxt: {
        textAlign:'center',
        alignSelf:'center',
        justifyContent:'center',
        fontWeight:'600',
        color: 'red'
        
    }

})
export default Home;