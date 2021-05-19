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
import React from "react";

function Note({ navigation }) {
  const date = new Date();

  return (
    <Container style={styles.container}>
      <Content>
        <Card style={styles.card}>
          <CardItem header>
            <TextInput style={styles.title} placeholder="Symptom.." />
          </CardItem>
          <CardItem>
            <Textarea rowSpan={7} placeholder="How did you feel?" />
          </CardItem>
          <CardItem footer>
            <Text>
              <Icon name="calendar" /> {date.toDateString()}
            </Text>
          </CardItem>
        </Card>
      </Content>
      <Footer style={styles.footer}>
        <Button transparent>
          <Text>Save</Text>
        </Button>
        <Button bordered onPress={navigation.push("Symptoms")}>
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
