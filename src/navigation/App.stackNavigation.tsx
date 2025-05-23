import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, RecordingScreen } from "../screens";

/** */
export type AppStackNavigationParams = {
  Home: undefined;
  Recording: undefined;
};

/** */
const Stack = createNativeStackNavigator<AppStackNavigationParams>();

export function AppStackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Recording" component={RecordingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
