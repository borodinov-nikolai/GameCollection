import Button from '@/src/shared/ui/button'
import React, { use, useState } from 'react'
import { Image, SafeAreaView, Text, TextInput, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const IMAGE_DIR = FileSystem.documentDirectory + 'images/'

export type Game = {
  id: number,
  name: string,
  imageUri: string
}

const ensureDirExists = async () => {
  const dirInfo = await FileSystem.getInfoAsync(IMAGE_DIR)
  if (!dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(IMAGE_DIR, { intermediates: true })
  }
}

export const AddGameScreen = () => {
  const [name, setName] = useState<string>('')
  const [imageUri, setImageUri] = useState<string>()
  const router = useRouter()

  const pickupImageAsync = async () => {
    await ensureDirExists()

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'images',
      allowsEditing: true,
      quality: 1
    })

    if (!result.canceled && result.assets?.[0].uri) {
      try {
        const fileName = `image_${Date.now()}.jpg`
        const newPath = IMAGE_DIR + fileName
        await FileSystem.copyAsync({
          from: result.assets?.[0].uri,
          to: newPath
        })
        setImageUri(newPath)
      } catch (e) {
        console.error(e)
      }
    } else {
      alert('You did not select any image')
    }
  }

  const onSave = async () => {
    const string = await AsyncStorage.getItem('savedGames')
  
    if(string){
      const savedGames: Game[] = JSON.parse(string)
      const newData = JSON.stringify([...savedGames, {id: savedGames.length + 1, name, imageUri}])
      await AsyncStorage.setItem('savedGames', newData)
      router.back()
    } else if(!string){
      await AsyncStorage.setItem('savedGames', JSON.stringify([{id: 1, name, imageUri}]))
      router.back()
    }
    // await AsyncStorage.clear()
  }

  return (
    <SafeAreaView>
      <View className={`p-[10px] gap-[20px]`} >
        <Text>Название</Text>
        <TextInput className={` bg-[white] h-[40px] px-[10px] rounded-lg`} value={name} onChangeText={setName} />
        {imageUri && <Image source={{ uri: imageUri }} className={`w-full h-[200px] rounded-lg`} />}
        <Button className={`mx-auto`} onPress={pickupImageAsync} >Добавить изображение</Button>
        <Button className={`mx-auto `} onPress={onSave} >Сохранить</Button>
      </View>
    </SafeAreaView>
  )
}
