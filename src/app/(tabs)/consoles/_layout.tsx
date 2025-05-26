import { Stack } from 'expo-router'
import React from 'react'

const ConsoleLayout = () => {
  return (
    <Stack screenOptions={{headerShown: false}} >
        <Stack.Screen name='index' options={{title: 'консоли', headerShown: true}} />
        <Stack.Screen name='switch/index' options={{title: 'nintendo switch', headerShown: true}} />
    </Stack>
  )
}

export default ConsoleLayout