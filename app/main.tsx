import React from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import background from "../assets/images/road.png";

const Main: React.FC = () => {
  const unicodeSettingIcon = "\u2699";

  return (
    <View style={styles.root}>
      <ImageBackground
        source={background}
        resizeMode="stretch"
        style={styles.background}
      >
        <SafeAreaView style={styles.root}>
          <View style={styles.rows}>
            <View style={styles.halfscreen}>
              <Text style={styles.stats}>Current Stats</Text>
            </View>
            <View style={styles.halfscreen}>
              <Text style={styles.settings}>{unicodeSettingIcon}</Text>
            </View>
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
  rows: {
    flex: 1,
    flexDirection: "row",
  },
  halfscreen: {
    width: "50%",
  },
  background: {
    flex: 1,
    justifyContent: "center",
  },
  stats: {
    color: "black",
  },
  settings: {
    textAlign: "right",
  },
});

export default Main;
