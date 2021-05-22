import { Button, Container, Header, Content, Card, CardItem } from 'native-base';
import React, {useState, useEffect} from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import {Text, StyleSheet, Image} from 'react-native'
import * as SecureStore from "expo-secure-store";
import axios from 'axios';
import database from '../utils';

function Symptoms({navigation}){
    const [notes, setNotes] = useState([]);
    
    const getNotes = async() => {
        const token = await SecureStore.getItemAsync("token");
        if(token){
            const res = await axios.get(`${database}/notes`, {
                headers: {'Authorization' : `Bearer ${token}`}
            })
            setNotes(res.data);
        }
    } 

    useEffect(() => {
        getNotes();
    }, []);

    return(
        <Container>
            <Header style={styles.header}>
                <Image style={styles.logo} source={require('../img/logo.png')}/>
                {/* <Text>Health</Text> */}
            </Header>
            <Content style={styles.content}>
                    <Button bordered style={styles.buttonCN} onPress={() => navigation.push("Note")} >
                        <Text style={styles.btnText}>
                            Create note
                        </Text>
                    </Button>
                <ScrollView>
                    {notes.map((note) => (
                        <Card style={styles.card}>
                        <CardItem header>
                            <Text style={styles.title}>{note.title}</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={styles.body}>{note.body}</Text>
                        </CardItem>
                        <CardItem footer>
                            <Text>Footer</Text>
                        </CardItem>
                    </Card>
                    ))}
                </ScrollView>
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
    buttonCN: {
        width: 150,
        borderColor: '#67a3d9',
        textAlign: 'center',
        borderTopWidth: 5,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    btnText: {
        color:'#ff8f9b',
        fontWeight:'bold',
    },
    logo: {
        top: '-20%'
    },
    content: {
        top: '10%'
    },
    card: {
        marginTop: '10%',
        padding: '2%',
        width: '90%',
        alignSelf:'center'
    },
    title: {
        fontWeight: "bold",
        fontSize: 16
    },
    body: {
        fontSize: 16
    }
})
export default Symptoms;