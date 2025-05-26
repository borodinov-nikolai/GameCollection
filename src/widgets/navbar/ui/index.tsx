import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { Ionicons } from "@expo/vector-icons"
import { Link, RelativePathString, usePathname, useRouter } from 'expo-router'


export const Navbar = () => {
 const pathname = usePathname()
 const router = useRouter()
  type Tab = {
  id: number,
  title: string,
  icon: keyof typeof Ionicons.glyphMap,
  href: string
}


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
       <View
       className={" px-[20px] flex-row h-[85px] w-full justify-around border-t border-[#ddd] pt-[10px]"} >
      {
        tabs.map(({id, title, icon, href})=> (
          <Pressable key={id} onPress={()=> router.push(href as RelativePathString)} >
             <View className={`flex w-[75px] flex-col gap-1 items-center`} >   
                   <Ionicons color={pathname === href ? 'black' : 'black'} name={icon} size={28} />
                 <Text className={pathname === href ? `text-[black]` : `text-[#fff]`} >{title}</Text>
             </View>
             </Pressable>
        ))
      }
    </View>
  )
}

