import React from 'react'
import { Image } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from 'react-native-vector-icons/FontAwesome5';
import FavoriteNavigation from './FavoriteNavigation';
import PokedexNavigation from './PokedexNavigation';
import AccountNavigation from './AccountNavigation';


const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen 
          name='Favorite' 
          component={FavoriteNavigation}
          options={{
            tabBarLabel: "Favoritos",
            tabBarIcon: ({color, size}) => (
              <Icon name="heart" color={color} size={size}></Icon>
            )
          }}
        />
        <Tab.Screen 
          name='Pokedex' 
          component={PokedexNavigation}
          options={{
            tabBarLabel: "",
            tabBarIcon: () => RenderPokeball()
          }}
          com
          />
        <Tab.Screen 
          name='Account' 
          component={AccountNavigation}
          options={{
            tabBarLabel: "Cuenta",
            tabBarIcon: ({color, size}) => (
              <Icon name="user" color={color} size={size}></Icon>
            )
          }}
          />
    </Tab.Navigator>
  )
}

function RenderPokeball() {
  return (
    <Image
      source={require('../assets/pokeball.png')}
      style={{width: 60, height: 60, top: -18}}
    />
  )
}