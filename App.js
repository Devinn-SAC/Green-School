import React from 'react';
import {View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import {Stacks} from './src/routes'

const App = () => {
 
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stacks />
      </NavigationContainer>
    </View>
  )
}

export default App
