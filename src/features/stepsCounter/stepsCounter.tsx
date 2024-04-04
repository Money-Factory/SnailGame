import { Pedometer } from "expo-sensors";
import { useState, useEffect } from "react";
import { Platform, TouchableOpacity, View } from "react-native";

import { decrement, increment, selectCount } from "./stepsCounterSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { Text } from "@/src/components/Themed";

export function StepsCounter() {
  const [isPedometerAvailable, setIsPedometerAvailable] = useState("checking");
  const [pastStepCount, setPastStepCount] = useState(0);
  const [currentStepCount, setCurrentStepCount] = useState(0);
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let subscription: Pedometer.Subscription;
    (async (): Promise<void> => {
      const permission = await Pedometer.getPermissionsAsync();
      if (!permission.granted) {
        await Pedometer.requestPermissionsAsync();
      }
      const isAvailable = await Pedometer.isAvailableAsync();
      setIsPedometerAvailable(String(isAvailable));

      if (isAvailable) {
        const end = new Date();
        const start = new Date();
        start.setDate(end.getDate() - 1);

        const pastStepCountResult =
          Platform.OS === "ios"
            ? await Pedometer.getStepCountAsync(start, end)
            : 0;
        if (pastStepCountResult) {
          setPastStepCount(pastStepCountResult.steps);
        }

        subscription = Pedometer.watchStepCount((result) => {
          setCurrentStepCount(result.steps);
        });
      }
    })();
    return () => subscription?.remove();
  }, []);

  return (
    <View>
      <Text>Pedometer.isAvailableAsync(): {isPedometerAvailable}</Text>
      <Text>Steps taken in the last 24 hours: {pastStepCount}</Text>
      <Text>Walk! And watch this go up: {currentStepCount}</Text>
      <Text>Stored Count: {count}</Text>
      <View>
        <TouchableOpacity onPress={() => dispatch(increment())}>
          <Text>+</Text>
        </TouchableOpacity>
        <Text>{count}</Text>
        <TouchableOpacity onPress={() => dispatch(decrement())}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
