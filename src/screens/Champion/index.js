import React from 'react';
import {View, Text} from 'react-native';

import {Layout, Colors, Spacing} from '../../styles';

const ChampionScreen = ({}) => {


  return (
    <View
      style={{
        ...Layout.screenPrimary,
        backgroundColor: Colors.colorWhite,
        ...Spacing.paddingHorizontalXm,
      }}
    >

      <Text>View Champion</Text>
    
    </View>
  );
};




export default ChampionScreen