import { globalStyles } from '@/src/shared/styles/global'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Pressable, SafeAreaView, View } from 'react-native'

const Categories = () => {
  const router = useRouter()
  return (
    <SafeAreaView style={globalStyles.safeArea} >
              <View className={`py-[10px] px-[10px]`} >
              <Pressable onPress={()=> router.push('/(tabs)/games/categories/addCategory')} className={` self-end border border-[gray] rounded-xl w-[42px] h-[42px] justify-center items-center`} >
                <Ionicons name='add-sharp' size={30} />
              </Pressable>
            </View>
        </SafeAreaView>
  )
}

export default Categories