import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'

//Screens
import HomeScreen from '../screens/Home';
import ChampionScreen from '../screens/Champion';

const Tab = createBottomTabNavigator();
export const TabBar = () => {

    return <Tab.Navigator 
        initialRouteName = 'Camera'
        screenOptions = { ({route}) => ({
            tabBarIcon: ({focused}) => {
                const color = focused ? '#02ADE1' : '#BEBDBE'
                switch (route.name) {
                    case 'Home':
                            return <Icon name = 'home' size={30} color= {color} />     
                        break
                    case 'Champion':
                            return <Icon name = 'trophy' size={30} color= {color} />     
                        break
                }
            }
        })}
    >
        <Tab.Screen name="Home" component={HomeScreen}  options={{title: 'Inicio', headerShown: false}} />
        <Tab.Screen name="Champion" component={ChampionScreen} options={{title: 'Campeonato',headerShown: false}} />
        
    </Tab.Navigator>
}