import React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";

const TutorialScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Some text here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TutorialScreen;
