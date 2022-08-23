import React, {useState} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {Layout, Colors, Spacing, Typography} from '../../styles';

const HomeScreen = () => {
  return (
    <View
      style={{
        ...Layout.screenPrimary,
        backgroundColor: Colors.colorWhite,
        ...Spacing.paddingHorizontalXm,
      }}>
      <Header />

      <TrashBinsList />

      <Text>OTHER</Text>
    </View>
  );
};

const TrashBinItem = ({data}) => {
  return (
    <TouchableOpacity
      style={{
        marginRight: wp(2),
        marginLeft: wp(2),
        alignItems: 'center',
        borderWidth: wp(0.2),
        borderColor: '#f1f1f1',
        width: wp(33),
      }}>
      <Image
        source={{
          uri: 'https://previews.123rf.com/images/kahovsky/kahovsky2003/kahovsky200300139/142113357-cute-happy-smiling-trash-bin-with-plastic-bottle-vector-flat-cartoon-character-illustration-icon-des.jpg',
        }}
        style={{width: wp(20), height: wp(20)}}
      />
      <Text
        style={{
          width: '100%',
          backgroundColor: Colors.colorSecondary,
          ...Typography.fontTextNormal,
          color: '#fff',
          fontSize: wp(2.5),
          padding: wp(2),
          textAlign: 'center'
        }}>
        TRASH BIN ITEM{' '}
      </Text>
    </TouchableOpacity>
  );
};

const TrashBinsList = () => {
  const [list, setList] = useState([
    {id: 1, type: 'trash bin 1'},
    {id: 2, type: 'trash bin 2'},
    {id: 3, type: 'trash bin 3'},
    {id: 4, type: 'trash bin 4'},
  ]);
  return (
    <View>
      <FlatList
        data={list}
        keyExtractor={item => item.id}
        renderItem={({item}) => <TrashBinItem />}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

const Header = () => {
  return (
    <View style={{paddingTop: wp(5)}}>
      <Text
        style={{
          textAlign: 'center',
          ...Typography.fontTextNormal,
          color: Colors.colorGray2,
          fontSize: wp(4),
        }}>
        ¡Hola amigos!
      </Text>
      <Text
        style={{
          textAlign: 'center',
          ...Typography.fontTextNormal,
          color: Colors.colorGray2,
          fontSize: wp(3.8),
        }}>
        Aprendamos a cuidar el planeta
      </Text>
      <View style={{alignItems: 'center'}}>
        <Image
          source={{
            uri: 'https://thumbs.dreamstime.com/b/cute-earth-character-waving-hand-cartoon-mascot-globe-personage-save-planet-concept-isolated-vector-illustration-177087114.jpg',
          }}
          style={{width: wp(30), height: wp(30)}}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
