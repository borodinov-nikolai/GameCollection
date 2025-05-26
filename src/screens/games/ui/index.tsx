import { globalStyles } from '@/src/shared/styles/global'
import { Link, RelativePathString } from 'expo-router'
import React from 'react'
import { FlatList, SafeAreaView, View } from 'react-native'

const data = [
  {
    id: '1',
    href: 'all',
    title: 'Все игры'
  },
  {
    id: '2',
    href: 'categories',
    title: 'Категории'
  },
  {
    id: '3',
    title: 'Сейчас прохожу'
  },
  {
    id: '4',
    title: 'Желаемое'
  },
  {
    id: '5',
    title: 'Жду выхода'
  },
  {
    id: '6',
    title: 'Какой-то текст'
  },
  {
    id: '7',
    title: 'Какой-то текст'
  },
  {
    id: '8',
    title: 'Какой-то текст'
  },
  {
    id: '9',
    title: 'Какой-то текст'
  },
  {
    id: '10',
    title: 'Какой-то текст'
  },
  {
    id: '11',
    title: 'Какой-то текст'
  },
  {
    id: '12',
    title: 'Какой-то текст'
  }

]

export const GamesScreen = () => {

  return (
    <SafeAreaView style={globalStyles.safeArea} >
      <View style={globalStyles.container} >
        <FlatList
          data={data}
          renderItem={({ item }) => (     
              <Link href={ item.href ? `/(tabs)/games/${item.href}` as RelativePathString : '/games'} className={`bg-[gray] my-[25px] py-[50px] px-[20px] rounded-[10px] text-[28px]`} >{item.title}</Link>
            )}
          keyExtractor={item => item.id}  
        />
      </View>
    </SafeAreaView>
  )
}
