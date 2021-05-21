import {
  Text,
  Container,
  Content,
  Card,
  CardItem,
  Button,
  Footer,
  Textarea,
  Icon,
} from "native-base";
import { StyleSheet, TextInput } from "react-native";
import React, {useState} from "react";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import database from "../utils";

function Note({ navigation }) {
  const date = new Date();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const createNote = async () => {
    const token = await SecureStore.getItemAsync("token");
    if (token){
      const newNote = {title, body};
      axios.post(`${database}/create/note`, newNote, {
        headers: {'Authorization': `Bearer ${token}`}
      })
      //sad ovde push na symptoms
    } 
  }

  return (
    <Container style={styles.container}>
      <Content>
        <Card style={styles.card}>
          <CardItem header>
            <TextInput style={styles.title} placeholder="Symptom.." onChangeText={(value) => setTitle(value)}/>
          </CardItem>
          <CardItem>
            <Textarea rowSpan={7} placeholder="How did you feel?" onChangeText={(value) => setBody(value)}/>
          </CardItem>
          <CardItem footer>
            <Text>
              <Icon name="calendar" /> {date.toDateString()}
            </Text>
          </CardItem>
        </Card>
      </Content>
      <Footer style={styles.footer}>
        <Button transparent onPress={createNote}>
          <Text>Save</Text>
        </Button>
        <Button bordered>
          <Text>Cancel</Text>
        </Button>
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    textAlign: "center",
  },
  card: {
    top: "10%",
    marginLeft: "2%",
    marginRight: "2%",
  },
  footer: {
    // top:'50%'
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: "3%",
  },
});
export default Note;
