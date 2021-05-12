import { View, Text, Content, Form, Item, Label, Input, Container, Button} from 'native-base';
import React, {useState} from 'react';
import {Platform, StyleSheet} from 'react-native';
// import DatePicker from '@dietime/react-native-date-picker';
// import DateTimePicker from '@react-native-community/datetimepicker';

function Register({navigation}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [isRegistrationSucces, setIsRegistrationSucces] = useState(false);

    fetch('http://192.168.31.170:9009/register')
    .then(res => res.json())
    .then(data => console.log('Output: ', data))
    .catch(err => console.error(err))

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
                        onPress={() => console.log(email, username, password, gender)}>
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