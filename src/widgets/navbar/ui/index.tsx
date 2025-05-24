import React from 'react'
import { Text, View } from 'react-native'
import { Ionicons } from "@expo/vector-icons"
import { Link, RelativePathString } from 'expo-router'
import { useNavigationState } from '@react-navigation/native'


export const Navbar = () => {
  const state = useNavigationState((state)=> state)
  let current = state.routes[state.index]?.name.split('/')[0]
  current = current === 'index' ? '' : current

  type Tab = {
  id: number,
  title: string,
  icon: keyof typeof Ionicons.glyphMap,
  href: string
}

console.log(current)

  const tabs: Tab[] = [
    {
      id: 1,
      title: 'игры',
      icon: 'game-controller',
      href: '/games'
    },
    {
      id: 2,
      title: 'консоли',
      icon: 'logo-xbox',
      href: '/consoles'
    },
    {
      id: 3,
      title: 'статистика',
      icon: 'book',
      href: '/statistics'
    },
    {
      id: 4,
      title: 'настройки',
      icon: 'settings',
      href: '/settings'
    }
    
  ]

  return (
       <View style={{backgroundColor: 'orange'}} className={" px-[20px] flex-row h-[70px] w-full justify-around items-center border-t border-[#ddd] "} >
      {
        tabs.map(({id, title, icon, href})=> (
          <Link key={id} href={href as RelativePathString} >
             <View className={`flex flex-col gap-1 items-center`} >   
                   <Ionicons color={`/${current}` === href ? 'black' : '#fff'} name={icon} size={28} />
                 <Text className={`text-[#fff]`} >{title}</Text>
             </View>
             </Link>
        ))
      }
    </View>
  )
}

