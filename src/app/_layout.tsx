import { Stack } from "expo-router";
import "../../global.css"
import { Navbar } from "../widgets/navbar";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name='index' options={{ title: 'home' }} />
        <Stack.Screen name='about/index' options={{ title: 'about' }} />
      </Stack>
      <Navbar/>
    </>
  )
}
