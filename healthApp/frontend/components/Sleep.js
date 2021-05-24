import { Text, StyleSheet, ImageBackground } from "react-native";
import { Button, Container, View } from "native-base";
import * as SecureStore from "expo-secure-store";
import React from "react";

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

  const getBackground = () => {
    const date = new Date();
    const hours = date.getHours();
    let background;
    if (hours > 19) {
      background = require("../img/night.jpeg");
    } else background = require("../img/day.jpg");

    return background;
  };

  return (
    <Container>
      <ImageBackground style={styles.img} source={getBackground()}>
        <View style={styles.view}>
          <Button
            style={styles.buttons}
            onPress={() => setTime("start", JSON.stringify(time()))}
          >
            <Text style={styles.txt}>Sleep</Text>
          </Button>
          <Button
            style={styles.buttons}
            onPress={() => setTime("end", JSON.stringify(time()))}
          >
            <Text style={styles.txt}>Woke up</Text>
          </Button>
          <Button
            transparent
            style={styles.buttons}
            onPress={async () => {
              const start = await getTime("start");
              const end = await getTime("end");
              console.log("Spavao si ovoliko: " + msToTime(end - start));
            }}
          >
            <Text style={styles.txt}>Calculate</Text>
          </Button>
        </View>
      </ImageBackground>
    </Container>
  );
}

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignSelf: "center",
    padding: "10%",
    shadowOpacity: 0.4,
    opacity: 0.6,
    shadowRadius: 100,
    borderRadius: 40,
  },
  buttons: {
    backgroundColor: "#e0edef",
    padding: "3%",
    justifyContent: "center",
    alignSelf: "center",
    shadowOpacity: 0.3,
    marginTop: "5%",
    width: "50%",
  },
  img: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  txt: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default Sleep;