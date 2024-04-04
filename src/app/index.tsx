import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Pressable } from "react-native";

import { StepsCounter } from "../features/stepsCounter/stepsCounter";

import { Text, View } from "@/src/components/Themed";

const IndexScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to snail game</Text>
      <Link href="/tutorial" asChild>
        <Pressable>
          <Text>Click for tutorial started!</Text>
        </Pressable>
      </Link>
      <StepsCounter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default IndexScreen;
