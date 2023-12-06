import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Icon } from '@rneui/themed';

import FeedStack from './Stacks/feedStack';
import { defaultColors } from '../utils';
import { View } from 'react-native';
// const Tab = createBottomTabNavigator()
const Tab = createMaterialBottomTabNavigator();

const TabNavigation = ({ navigation }) =>{
    return(
      <Tab.Navigator 
        screenOptions={{
          tabBarHideOnKeyboard: 'true',
          tabBarStyle: {
            borderTopColor: 'transparent',
            borderTopWidth: 0,
            elevation: 0 
          },
        }} 
        activeColor={defaultColors.activeColor}
        inactiveColor='#adadad'
        barStyle={{ 
          backgroundColor: defaultColors.primary,
          shadowColor: "#fff",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 1,
          shadowRadius: 5,
          elevation: 6
        }}
        labeled={false}
        // shifting={true}
      >
        <Tab.Screen 
          name="FeedTab"  
          component={ FeedStack }   
          options={{ 
            headerTitleStyle: { opacity: 0 }, 
            headerShown: false, 
            headerTransparent: true,
            tabBarLabel: 'Início',
            tabBarBadge: false,
            tabBarIcon: ({focused, color}) => ( 
                <Icon 
                  name="globe" 
                  type="entypo" 
                  size={24}  
                  color={color}
                />
            )
          }}  
        />
      </Tab.Navigator>  
    )
  } 

export default TabNavigation;


