import { Stack } from "expo-router";
import "../../global.css"
import { Navbar } from "../widgets/navbar";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name='index' options={{ title: 'home' }} />
        <Stack.Screen name='consoles/index' options={{ title: 'consoles' }} />
        <Stack.Screen name='games/index' options={{ title: 'games' }} />
        <Stack.Screen name='statistics/index' options={{ title: 'statistics' }} />
        <Stack.Screen name='settings/index' options={{ title: 'settings' }} />
      </Stack>
      <Navbar/>
    </>
  )
}
