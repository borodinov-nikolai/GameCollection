import { globalStyles } from '@/src/shared/styles/global'
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

export const ConsolesScreen = () => {
  return (
    <SafeAreaView style={globalStyles.safeArea} >
        <View style={globalStyles.container} >
            <Text className={`text-[28px]`} >consoles</Text>
        </View>
    </SafeAreaView>
  )
}
