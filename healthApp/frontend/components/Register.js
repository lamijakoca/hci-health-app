import {
  Text,
  Content,
  Form,
  Item,
  Label,
  Input,
  Container,
  Button,
  Picker,
} from "native-base";
import React, { useState } from "react";
import { Alert, StyleSheet } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from "axios";
import { onChange } from "react-native-reanimated";

function Register({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState(new Date());
  const [isRegistrationSucces, setIsRegistrationSucces] = useState(false);

  const registerSubmit = () => {
    const newUser = { username, email, password, gender };
    axios.post("http://192.168.1.11:9009/register", newUser).then((res) => {
      if (res.status === 200) {
        console.log("Register Success!");
        setIsRegistrationSucces(true);
      } else if (res.status === 400) {
        console.log("This user already exists.");
      }
      if (isRegistrationSucces == true){
        navigation.push('SignIn')
      }
      else{
        Alert.alert(
          "Registartion failed",
          "Please check your inputs"
        );
      }
    });
  };

  return (
    <Container>
      <Text style={styles.text}>Create your account</Text>
      <Content>
        <Form style={styles.form}>
          <Item stackedLabel>
            <Label>Email</Label>
            <Input
              keyboardType="email-address"
            //   keyboardAppearance="dark"
              autoCompleteType="email"
              value={email}
              onChangeText={setEmail}
            />
          </Item>
          
          <Item stackedLabel>
            <Label>Username</Label>
            <Input value={username} 
                   onChangeText={setUsername} 
            />
          </Item>

          <Item stackedLabel>
            <Label>Password</Label>
            <Input value={password} 
                   onChangeText={setPassword} 
            />
          </Item>

          <Item stackedLabel>
            <Label>Gender</Label>
            <Picker 
            style={{width: 420}}
            mode="dropdown"
            placeholder="Select your gender"
            selectedValue={gender}
            onValueChange={(value) => setGender(value)}>
                <Picker.Item label="Female" value="female"/>
                <Picker.Item label="Male" value="male"/>
            </Picker>
          </Item>

          <Item stackedLabel>
              <Label>Date of birth</Label>
             <DateTimePicker 
                style={styles.datepicker}
                value={date}
                mode="date"
                is24Hour={true}
                testID="dateTimePicker"
                display="default"
                onChange={(value) => setDate(value)}
            />
          </Item>
          <Button
            rounded
            style={styles.regButton}
            onPress={() => {registerSubmit();}}
          >
            <Text style={styles.txtRegister}>Register</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    paddingTop: 20,
    fontSize: 18,
  },
  genderpicker: {
    textAlign: "left",
  },
  regButton: {
    backgroundColor: "#67a3d9",
    alignItems: "center",
    alignSelf: "center",
    top: "10%",
    width: "35%",
    height: "15%",
  },
  txtRegister: {
    paddingLeft: "27%",
    paddingRight: "27%",
  },
  form: {
    top: "20%",
  },
  datepicker: {
      alignSelf:'center',
      width: '100%',
      padding: '7%'
  }
});
export default Register;
