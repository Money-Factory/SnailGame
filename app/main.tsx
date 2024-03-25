import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

import background from "../assets/images/road.png";

const Main: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.background}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Main;
