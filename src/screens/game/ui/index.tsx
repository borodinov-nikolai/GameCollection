import { globalStyles } from '@/src/shared/styles/global'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import { Game } from '../../addGame'
import { useLocalSearchParams, useNavigation } from 'expo-router'

export const GameScreen = () => {
  const navigation = useNavigation()
  const [game, setGame] = useState<Game>()
  const {id} = useLocalSearchParams()
   
  useEffect(()=> {
    const getGame = async ()=> {
      const dataString = await AsyncStorage.getItem('savedGames')
      if(dataString) {
        const games: Game[] = JSON.parse(dataString)
        const game = games.find((item)=> item.id === +id)
        setGame(game)
        if(game?.name) {
          navigation.setOptions({
          title: game.name
        })
        }
      }
    }

    getGame()
  }, [])

  return (
    <SafeAreaView style={globalStyles.safeArea} >
        <View style={globalStyles.container} className={`gap-[20px]`} >
        <Text className={`text-[black] text-[24px] text-center`} >{game?.name}</Text>
          <Image source={{uri: game?.imageUri}} className={`w-full h-[400px] rounded-lg `} />
        </View>
    </SafeAreaView>
  )
}
