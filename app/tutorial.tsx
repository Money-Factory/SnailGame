import { Link } from "expo-router";
import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import PagerView from "react-native-pager-view";

const Tutorial: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <PagerView style={styles.viewPager} initialPage={0}>
        <View style={styles.page} key="1">
          <Text>First page</Text>
          <Text>Swipe ➡️</Text>
        </View>
        <View style={styles.page} key="2">
          <Text>Second page</Text>
        </View>
        <View style={styles.page} key="3">
          <Text>Third page</Text>
          <Link href="/index" asChild>
            <Pressable>
              <Text>Get started!</Text>
            </Pressable>
          </Link>
        </View>
      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Tutorial;
