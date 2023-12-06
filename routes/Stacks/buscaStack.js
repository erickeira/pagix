import React, { useEffect } from 'react';
import { TouchableOpacity, StatusBar, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainerRefContext, useIsFocused, useNavigationState, useRoute } from '@react-navigation/native';
import { Avatar } from '@rneui/themed';
import Logo from '../../assets/images/pagix_logo.png'

import Busca from '../../pages/busca'; 

const Stack = createStackNavigator();

import { navigationRef  } from '../../App'
import { defaultStyles } from '../../utils';
import { Icon } from '@rneui/themed';
import { color } from '@rneui/base';




const BuscaStack = ({ navigation }) => {
  const currentRouteName = navigationRef?.current?.getCurrentRoute().name;
  const route = useRoute()
  const fullScreens = ["Busca"]
  useEffect(() => {
    navigation.setOptions({
      tabBarStyle: { display: fullScreens.includes(currentRouteName) ? 'none' : 'block' }
    })
  },[ route ])
  
  return ( 
  <Stack.Navigator >
      <Stack.Screen 
        name="Feed" 
        component={Busca} 
        options={{
          headerShown: false, 
          // headerTransparent: true
        }}
      />
     
    </Stack.Navigator>
  )
}


export default BuscaStack;
