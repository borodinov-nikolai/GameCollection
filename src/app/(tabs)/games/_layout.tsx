import { Stack } from 'expo-router'
import React from 'react'

const GamesLayout = () => {

  return (
    <Stack screenOptions={{headerShown: false}} >
        <Stack.Screen name='index' options={{title: 'игры'}} />
        <Stack.Screen name='all/index' options={()=> ({title: 'все игры', headerShown: true})}/>
        <Stack.Screen name='categories/index' options={()=> ({title: 'категории', headerShown: true})}/>
        <Stack.Screen name='all/addGame/index' options={()=> ({title: 'добавить игру', headerShown: true})}/>
        <Stack.Screen name='categories/addCategory/index' options={()=> ({title: 'добавить категорию', headerShown: true})}/>
    </Stack>
  )
}

export default GamesLayout