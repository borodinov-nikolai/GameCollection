import { Stack } from 'expo-router'
import React from 'react'

const ConsoleLayout = () => {
  return (
    <Stack screenOptions={{headerShown: true}} >
        <Stack.Screen name='index' options={{title: 'консоли', headerShown: false}} />
        <Stack.Screen name='switch/index' options={{title: 'nintendo switch'}}  />
    </Stack>
  )
}

export default ConsoleLayout