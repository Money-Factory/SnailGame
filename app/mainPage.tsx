import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import background from "../assets/images/road.png";
import snail from "../assets/images/snail.png";

import { Text, View } from "@/components/Themed";

const MainPage: React.FC = () => {
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
            <View style={styles.center}>
              <View style={styles.snail}>
                <ImageBackground
                  source={snail}
                  resizeMode="stretch"
                  style={styles.background}
                />
              </View>
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
    width: "40%",
  },
  center: {
    width: "20%",
    height: "100%",
    borderColor: "yellow",
    borderWidth: 3,
    flex: 1,
  },
  snail: {
    width: "100%",
    height: "10%",
    borderColor: "pink",
    borderWidth: 3,
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

export default MainPage;
