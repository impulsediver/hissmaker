import React from "react";
import { useColorScheme } from "react-native";
import { AppStackNavigation } from "./navigation";

/** */
export function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  /*
   * To keep the template simple and small we're adding padding to prevent view
   * from rendering under the System UI.
   * For bigger apps the recommendation is to use `react-native-safe-area-context`:
   * https://github.com/AppAndFlow/react-native-safe-area-context
   *
   * You can read more about it here:
   * https://github.com/react-native-community/discussions-and-proposals/discussions/827
   */
  const safePadding = "5%";

  return <AppStackNavigation />;
}
