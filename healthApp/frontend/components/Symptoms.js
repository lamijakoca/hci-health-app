import { Button, Container, Header, Content } from 'native-base';
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import {Text, StyleSheet, Image} from 'react-native'

function Symptoms({navigation}){
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
    }
})
export default Symptoms;