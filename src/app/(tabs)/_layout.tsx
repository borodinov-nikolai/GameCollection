import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'


const TabsLayout = () => {

    type Tab = {
        name: string,
        title: string,
        icon: keyof typeof Ionicons.glyphMap
    }

    const tabs: Tab[] = [
        {
            name: 'games',
            title: 'игры',
            icon: 'game-controller'
        },
        {
            name: 'consoles',
            title: 'консоли',
            icon:  'albums'
        },
        {
            name: 'statistics',
            title: 'статистика',
            icon: 'book'
        },
        {
            name: 'settings',
            title: 'настройки',
            icon: 'settings'
        }
    ]

    return (
        <Tabs screenOptions={{headerShown: false}} >
            {
                tabs.map(({ name, title, icon }) => (
                    <Tabs.Screen
                        key={name}
                        name={name}
                        options={{
                            title,
                            tabBarIcon: ({focused}) => <Ionicons size={20} name={focused ? (icon + '-sharp') as Tab['icon'] : (icon + '-outline' as Tab['icon'])} />,
                            tabBarActiveTintColor: 'black'
                        }}
                    />
                ))
            }
        </Tabs>
    )
}

export default TabsLayout