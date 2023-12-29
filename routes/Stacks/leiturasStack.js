import React, { useEffect } from 'react';
import { TouchableOpacity, StatusBar, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainerRefContext, useIsFocused, useNavigationState, useRoute } from '@react-navigation/native';
import { Avatar } from '@rneui/themed';
import Logo from '../../assets/images/pagix_logo.png'

import Leituras from '../../pages/leituras'; 

const Stack = createStackNavigator();

import { navigationRef  } from '../../App'
import { defaultStyles } from '../../utils';
import { Icon } from '@rneui/themed';
import { color } from '@rneui/base';




const LeiturasStack = ({ navigation }) => {
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
        name="Leituras" 
        component={Leituras} 
        options={{
          headerShown: false, 
        //   headerTransparent: true,
        //   headerStyle: defaultStyles.defaultHeaderStyles,
        //   headerTintColor: '#fff',
        }}
      />
     
    </Stack.Navigator>
  )
}


export default LeiturasStack;
