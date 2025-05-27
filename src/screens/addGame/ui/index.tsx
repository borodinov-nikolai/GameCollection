import Button from '@/src/shared/ui/button'
import React, { useState } from 'react'
import { SafeAreaView, Text, TextInput, View } from 'react-native'

export const AddGameScreen = () => {
    const [name, setName] = useState<string>('')
 
  return (
    <SafeAreaView>
        <View className={`p-[10px] gap-[20px]`} >
            <Text>Название</Text>
            <TextInput className={` bg-[white] h-[40px] px-[10px] rounded-lg`} value={name} onChangeText={setName} />
            <Button className={`mx-auto `} onPress={()=> alert('you press the button')}>Сохранить</Button>
        </View>
    </SafeAreaView>
  )
}
