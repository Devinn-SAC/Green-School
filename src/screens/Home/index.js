import React from 'react';
import {View, Text} from 'react-native';

import {Layout, Colors, Spacing} from '../../styles';

const HomeScreen = ({}) => {


  return (
    <View
      style={{
        ...Layout.screenPrimary,
        backgroundColor: Colors.colorWhite,
        ...Spacing.paddingHorizontalXm,
      }}
    >

      <Text>View Home</Text>
    
    </View>
  );
};




export default HomeScreen