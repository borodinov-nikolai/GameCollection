import { Stack } from 'expo-router'
import React from 'react'

const GamesLayout = () => {

  return (
    <Stack screenOptions={{headerShown: true}} >
        <Stack.Screen name='index' options={{title: 'игры', headerShown: false}} />
        <Stack.Screen name='[id]' options={{title: 'игра'}} />
        <Stack.Screen name='all/index' options={()=> ({title: 'все игры'})}/>
        <Stack.Screen name='categories/index' options={()=> ({title: 'категории'})}/>
        <Stack.Screen name='all/addGame/index' options={()=> ({title: 'добавить игру'})}/>
        <Stack.Screen name='categories/addCategory/index' options={()=> ({title: 'добавить категорию'})}/>
    </Stack>
  )
}

export default GamesLayout