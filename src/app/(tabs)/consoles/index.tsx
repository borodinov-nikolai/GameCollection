import { globalStyles } from '@/src/shared/styles/global'
import { useRouter } from 'expo-router'
import React from 'react'
import { Pressable, SafeAreaView, Text, View } from 'react-native'

const Consoles = () => {
    const router = useRouter()
  return (
    <SafeAreaView style={globalStyles.safeArea} >
        <View style={globalStyles.container} >
            <Pressable onPress={()=> router.push('/(tabs)/consoles/switch')} >
                <Text className={`underline text-[blue]`} >
                Nintendo Switch
                </Text>
            </Pressable>
        </View>
    </SafeAreaView>
  )
}

export default Consoles