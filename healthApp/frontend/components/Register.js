import { Text, Content, Form, Item, Label, Input, Container, Button } from 'native-base';
import React, {useState} from 'react';
import { Alert, StyleSheet } from 'react-native';
import axios from 'axios';


function Register({navigation}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [isRegistrationSucces, setIsRegistrationSucces] = useState(false);

    const registerSubmit = () => {
        const newUser = {username, email, password, gender};
        axios.post('http://192.168.1.9:9009/register', newUser)
             .then((res) => {
                 if (res.status === 200) {
                     console.log('Register Success!')
                     setIsRegistrationSucces(true);
                 }
                 else if (res.status === 400) {
                     console.log('The email already exists.');
                 }
             })
    }

    return(
        <Container>
            <Text style={styles.text}>Create your account</Text>
            <Content>
                <Form style={styles.form}>
                    <Item stackedLabel>
                        <Label>Email</Label>
                        <Input 
                            keyboardType='email-address' 
                            autoCompleteType='email'
                            value={email}
                            onChangeText={setEmail}/>
                    </Item>
                    <Item stackedLabel>
                        <Label>Username</Label>
                        <Input 
                            value={username} 
                            onChangeText={setUsername}/>
                    </Item>
                    <Item stackedLabel>
                        <Label>Password</Label>
                        <Input 
                            value={password}
                            onChangeText={setPassword}/>
                    </Item>
                    <Item stackedLabel>
                        <Label>Gender</Label>
                        <Input 
                            value={gender}
                            onChangeText={setGender}/>
                    </Item>
                    <Button rounded 
                        style={styles.regButton} 
                        onPress={() => {
                            registerSubmit();
                            isRegistrationSucces ? navigation.push("SignIn") : Alert.alert("Registartion failed", "Please check your inputs");
                        }}>
                        <Text style={styles.txtRegister}>Register</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: "center", 
        paddingTop: 20,
        fontSize: 18
    },
    genderpicker: {
        textAlign:'left',
    },
    regButton: {
        backgroundColor: '#67a3d9',
        alignItems:'center',
        alignSelf:'center',
        top: '10%',
        width: '35%',
        height: '15%',
    },
    txtRegister: {
        paddingLeft: '27%',
        paddingRight: '27%'
    },
    form: {
        top: '20%'
    }
})
export default Register;