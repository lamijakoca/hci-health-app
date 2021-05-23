import { Button, Container, Content, Header } from "native-base";
import React from "react";
import { Text } from "react-native";
import * as SecureStore from "expo-secure-store";

function Sleep() {

  const setTime = async (key, time) => {
    return await SecureStore.setItemAsync(key, time);
  };

  const getTime = async (key) => {
    return await SecureStore.getItemAsync(key);
  };

  const time = () => {
    const date = new Date();
    return date.getTime();
  };

  const msToTime = (duration) => {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  };

  return (
    <Container>
      <Header>
        <Text>Sleep component</Text>
      </Header>
      <Content>
        <Button onPress={() => setTime("start", JSON.stringify(time()))}>
          <Text>Go to Sleep</Text>
        </Button>
        <Button onPress={() => setTime("end", JSON.stringify(time()))}>
          <Text>Woke up</Text>
        </Button>
        <Button
          onPress={async () => {
            const start = await getTime("start");
            const end = await getTime("end");
            console.log("Spavao si ovoliko: " + msToTime(end - start));
          }}
        >
          <Text>calculate</Text>
        </Button>
      </Content>
    </Container>
  );
}

export default Sleep;
