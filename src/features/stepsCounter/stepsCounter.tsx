import React from "react";
import { TouchableOpacity, View } from "react-native";

import { decrement, increment, selectCount } from "./stepsCounterSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { Text } from "@/src/components/Themed";

export function StepsCounter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <View>
      <View>
        <TouchableOpacity onPress={() => dispatch(increment())}>
          <Text>+</Text>
        </TouchableOpacity>
        <Text>{count}</Text>
        <TouchableOpacity onPress={() => dispatch(decrement())}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Steps: {count}</Text>
      </View>
    </View>
  );
}
