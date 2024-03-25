import React from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import background from "../assets/images/road.png";

const Main: React.FC = () => {
  return (
    <View style={styles.root}>
      <ImageBackground
        source={background}
        resizeMode="stretch"
        style={styles.background}
      >
        <SafeAreaView style={styles.root}>
          <View style={styles.test2}>
            <Text>filler</Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
  },
  test: {
    flex: 1,
    backgroundColor: "red",
  },
  test2: {
    flex: 1,
    borderColor: "yellow",
    borderWidth: 1,
  },
});

export default Main;
