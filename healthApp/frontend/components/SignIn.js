import { Container, Content, Form, Input, Label, Item, Header, Button} from 'native-base';
import * as React from 'react';
import { SafeAreaView, Text, StyleSheet, Alert } from 'react-native';

function SignIn({navigation}){
    return(
        <Container>
          <Header style={styles.header}>
             <Text style={styles.headerText}>Health + Logo</Text>
          </Header>
            <Content style={styles.content}>
                <Form>
                    <Item stackedLabel>
                        <Label> Username </Label>
                        <Input/>
                    </Item>
                    <Item stackedLabel>
                        <Label>Password</Label>
                        <Input/>
                    </Item>
                </Form>
                <Button rounded style={styles.signInButton} onPress={()=> Alert.alert('Notification', 'Ne radi to sad nista')}>
                    <Text style={styles.text}> Sign in </Text>
                </Button>
                <Text>Don't have an account?</Text>
                <Button transparent onPress={() => navigation.push("Register")}>
                    <Text>Register an Account</Text>
                </Button>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        padding:'10%'
    },
    header: {
        backgroundColor:'#fff',
        borderBottomColor:'#fff',
    },
    signInButton:{
        width: 150,
        height: 50,
        justifyContent:'center',
        marginTop: '10%',
        marginLeft: '25%',
        backgroundColor: '#ff8f9b'
    },
    text: {
        color: 'white'
    },
    headerText:{
        justifyContent: 'flex-start',
        fontSize: 20,
        color: '#67a3d9',
        top: 40
    }
}); 

export default SignIn;