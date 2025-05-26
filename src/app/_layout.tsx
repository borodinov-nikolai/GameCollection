import "../shared/styles/global.css"
import { Stack } from "expo-router";
import { Navbar } from "../widgets/navbar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { globalStyles } from "../shared/styles/global";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <SafeAreaProvider style={globalStyles.safeArea} >
      <View className={`flex-1`} >
        <Stack screenOptions={{ headerShown: false }} >
          <Stack.Screen name='(tabs)' />
        </Stack>
      </View>

    </SafeAreaProvider>

  )
}
