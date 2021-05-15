import axios from 'axios';
import { Container, Content, Form, Input, Label, Item, Header, Button} from 'native-base';
import React, {useState} from 'react';
import { Text, StyleSheet, Image, TextInput } from 'react-native';

function SignIn({navigation}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    // const loginSubmit = () => {
    //     const User = {username, password};
    //     axios.post('http://192.168.1.9:9009/authenticate', User)
    //          .then((res) => {
    //              const {token} = res.data;
    //              localStorage.setItem('Authorization', 'Bearer ' + token);
    //              setIsAuthorized(true);
    //          })
    // }
    
    return(
        <Container>
          <Header style={styles.header}>
             {/* treba da skinem png sa sajta */}
             <Image style={styles.logo} 
                    source={require('../img/logo.png')}/>
          </Header>
            <Content style={styles.content}>
                <Form>
                    <Item stackedLabel>
                        <Label> Username </Label>
                        <Input/>
                    </Item>
                    <Item stackedLabel>
                        <Label>Password</Label>
                        <Input secureTextEntry={true}/>
                    </Item>
                </Form>
                <Button rounded 
                        style={styles.signInButton} 
                        onPress={()=> navigation.push('Home')}>
                    <Text style={styles.text}> 
                        Sign in 
                    </Text>
                </Button>
                <Text style={styles.question}> Don't have an account? </Text>
                <Button style={styles.transButton} 
                        transparent 
                        onPress={() => navigation.push("Register")}>
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
        padding:'10%',
        top: '5%'
    },
    header: {
        backgroundColor:'#fff',
        borderBottomColor:'#fff',
        height: '25%'
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
    },
    question: {
        alignSelf:'center',
        top: '5%'
    },
    transButton: {
        alignSelf: 'center',
        top: '5%',
        
    },
    logo: {
        top: '-20%',
    }
}); 

export default SignIn;