import React, {useContext, useEffect} from 'react';
import {  TouchableOpacity, Dimensions, StatusBar, Platform } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import { 
  createDrawerNavigator,  
  DrawerContentScrollView,
  DrawerItemList, 
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { useRoute } from '@react-navigation/native';
import DrawerContent from './drawer';

import TabNavigation from './tabNavigation';

import { defaultColors, defaultStyles } from '../utils';
import Scan from '../pages/scan';
import Login from '../pages/login';
import BackButton from '../components/backButton';
import HeaderSaveButton from '../components/headerSaveButton';
import { AuthContext } from '../context';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function MyDrawer() {
    const { session } = useContext(AuthContext)
    return (
        <Drawer.Navigator
          drawerContent={
            props => <DrawerContent {...props}/>
          }
          screenOptions={{
            drawerStyle: {
              backgroundColor: defaultColors.secundary
            },
          }}
        >   
        {
          session ?
          <Drawer.Screen 
            name="Global" 
            component={GlobalStack} 
            options={{  
              headerShown: false,
              drawerItemStyle: { display: 'none' } 
            }}
          />
          :
          <Drawer.Screen 
            name="Login" 
            component={Login} 
            options={{  
              headerShown: false,
              drawerItemStyle: { display: 'none' } 
            }}
          />
        }
            
            
        </Drawer.Navigator>
    );
}
const GlobalStack = () => (
    <Stack.Navigator screenOptions={{tabBarActiveTintColor: 'blue',labelStyle: {fontSize: 12}}} >
      <Stack.Screen name="Bottom" component={TabNavigation} options={{  headerShown: false }}/>
      <Stack.Screen 
        name="Scan" 
        component={Scan} 
        options={{  
          headerShown: true,
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => {
            return(
              <BackButton/>
            )
          },
          headerRight: () => {
            return(
              <HeaderSaveButton/>
            )
          }
          // headerShown: false 
        }}
      />
    </Stack.Navigator>
)
