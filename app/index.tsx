import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Pressable } from "react-native";

import { Text, View } from "@/components/Themed";

const Index: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to snail game</Text>
      <Link href="/tutorial" asChild>
        <Pressable>
          <Text>Click for tutorial started!</Text>
        </Pressable>
      </Link>
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

export default Index;
