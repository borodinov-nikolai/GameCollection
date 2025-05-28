import { Game } from '@/src/screens/addGame'
import { globalStyles } from '@/src/shared/styles/global'
import { Ionicons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getActionFromState, useIsFocused } from '@react-navigation/native'
import { Link, useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, Pressable, SafeAreaView, View } from 'react-native'


const Category = () => {
  const router = useRouter()
  const [games, setGames] = useState<Game[]>([])
  const isFocused = useIsFocused()

  useEffect(() => {
    const getData = async () => {
      if (isFocused) {
        const string = await AsyncStorage.getItem('savedGames')
        if (string) {
          const games = JSON.parse(string)
          setGames(games)
        }
      }
    }
    getData()
  }, [isFocused])

  const onDelete = async (id: number)=> {
      const filteredGames = games.filter(item => item.id !== id)
      await AsyncStorage.setItem('savedGames', JSON.stringify(filteredGames))
      setGames(filteredGames)
  }


  return (
    <SafeAreaView style={globalStyles.safeArea} >
      <View className={`py-[10px] px-[10px]`} >
        <Pressable onPress={() => router.push('/(tabs)/games/all/addGame')} className={` self-end border border-[gray] rounded-xl w-[42px] h-[42px] justify-center items-center`} >
          <Ionicons name='add-sharp' size={30} />
        </Pressable>
        <FlatList
          data={games}
          renderItem={({ item }) => (
            <View className={`flex-row items-center gap-[20px] bg-[#80808024] h-[80px] rounded-lg mt-[20px] overflow-hidden pr-[20px]`} >
              <Image source={{ uri: item.imageUri }} className={`w-[80px] h-[80px] rounded-lg`} />
              <Link href={'/(tabs)/games'} >{item.name}</Link>
              <Pressable onPress={()=> onDelete(item.id)} className={`ml-auto`} >
                <Ionicons name='trash' size={20} />
              </Pressable>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  )
}

export default Category