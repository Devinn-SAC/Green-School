import React from 'react';
import {View, StatusBar} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import {Stacks} from './src/routes'

const App = () => {
 
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent={true} barStyle="dark-content" backgroundColor="transparent"  />
      <NavigationContainer>
        <Stacks />
      </NavigationContainer>
    </View>
  )
}

export default App
