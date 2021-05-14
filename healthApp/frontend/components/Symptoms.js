import { Button, Container, Header, Content } from 'native-base';
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import {Text, StyleSheet, Image} from 'react-native'

function Symptoms(){
    return(
        <Container>
            <Header style={styles.header}>
                <Image source={require('../img/logo.png')}/>
                {/* <Text>Health</Text> */}
            </Header>
            <Content>
                <ScrollView>
                    <Button bordered style={styles.buttonCN} >
                        <Text style={styles.btnText}>
                            Create note
                        </Text>
                    </Button>
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
        paddingTop: 20,
        // padding: '10%'
    },
    buttonCN: {
        width: 150,
        borderColor: '#67a3d9',
        textAlign: 'center',
        borderTopWidth: 5,
        justifyContent: 'center',

    },
    btnText: {
        color:'#ff8f9b',
        fontWeight:'bold',
    }
})
export default Symptoms;