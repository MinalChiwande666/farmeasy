import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Profile } from '../../Root/Root'

const StackProfile = () => {
    const Stack = createNativeStackNavigator()
  return (
   <>
   <Stack.Navigator initialRouteName='Profile'>
    <Stack.Screen name='Profile' component={Profile}/>
   </Stack.Navigator>
   </>
  )
}

export default StackProfile