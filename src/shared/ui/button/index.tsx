import React, { FC, ReactNode } from 'react'
import { Pressable, Text } from 'react-native'
import cs from 'classnames'

type Props = {
    children: ReactNode,
    onPress?: ()=> void,
    className?: string
}

const Button: FC<Props> = ({children, className, ...props}) => {
  return (
    <Pressable {...props} className={cs(`bg-blue-600 h-[50px] w-[200px] rounded-lg items-center justify-center`, className)} >
        <Text className={`text-[white] text-[20px]`} >{children}</Text>
    </Pressable>
  )
}

export default Button