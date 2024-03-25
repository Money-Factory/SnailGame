import { Link } from "expo-router";
import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const Home: React.FC = () => {
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

export default Home;
