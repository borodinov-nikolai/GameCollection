import React from 'react'
import { View } from 'react-native'
import { Ionicons } from "@expo/vector-icons"
import { Link, RelativePathString } from 'expo-router'
import { useNavigationState } from '@react-navigation/native'


export const Navbar = () => {
  const state = useNavigationState((state)=> state)
  let current = state.routes[state.index]?.name.split('/')[0]
  current = current === 'index' ? '' : current

  type Tab = {
  id: number,
  icon: keyof typeof Ionicons.glyphMap,
  href: string
}


  const tabs: Tab[] = [
    {
      id: 1,
      icon: 'game-controller',
      href: '/'
    },
    {
      id: 2,
      icon: 'accessibility',
      href: '/about'
    }
  ]

  return (
       <View style={{backgroundColor: 'orange'}} className={" flex-row h-[70px] w-full justify-around items-center border-t border-[#ddd] "} >
      {
        tabs.map(({id, icon, href})=> (
          <Link key={id} href={href as RelativePathString} ><Ionicons color={`/${current}` === href ? 'black' : '#fff'} name={icon} size={28} /></Link>
        ))
      }
    </View>
  )
}

