import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {TabBar} from './TabBar'

const Stack = createNativeStackNavigator()
export const Stacks = () => {
    return <Stack.Navigator 
    >
      <Stack.Screen name="TabBar" component={TabBar} options={{
          headerShown: false,
          headerStyle: {
            paddingStart: 8
          }
        }} 
      />
  </Stack.Navigator>
}