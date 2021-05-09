import { View, Text, Content, Form, Item, Label, Input, Container, Button} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
// import DatePicker from '@dietime/react-native-date-picker';

function Register({navigation}){

    return(
        <Container>
            <Text style={styles.text}>Create your account</Text>
            <Content>
                <Form>
                    <Item stackedLabel>
                        <Label>Email</Label>
                        <Input keyboardType='email-address' autoCompleteType='email'/>
                    </Item>
                    <Item stackedLabel>
                        <Label>Username</Label>
                        <Input/>
                    </Item>
                    <Item stackedLabel>
                        <Label>Password</Label>
                        <Input/>
                    </Item>
                    <Item stackedLabel>
                        <Label>Gender</Label>
                    </Item>
                    <Item stackedLabel>
                       <Label> Date of birth </Label>
                       {/* <DatePicker
                       height='200'
                       value={date}
                       onChange={(value) => setDate(value)}
                       format="yyyy-mm-dd"/>
                        <Text>{date ? date.toDateString() : "Select date..."}</Text> */}
                    </Item>
                    <Button rounded onPress={() => navigation.push('Home')}>
                        <Text>Register</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: "center", 
        paddingTop: 10,
        fontSize: 18
    },
    genderpicker: {
        textAlign:'left',
    },
})
export default Register;