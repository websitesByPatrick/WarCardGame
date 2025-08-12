import { Slot } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Inter_900Black, useFonts } from "@expo-google-fonts/inter";
import { LuckiestGuy_400Regular } from "@expo-google-fonts/luckiest-guy"
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Inter_900Black,
    LuckiestGuy_400Regular,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }





  return (
<View style={[{backgroundColor: '#1e5c3a'}, {flex: 1}]}>
  <SafeAreaView style={{flex:1}}>
    < Slot />
  </SafeAreaView>
 
</View>
 )
}
