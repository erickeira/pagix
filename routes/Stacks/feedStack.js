import React, { useEffect } from 'react';
import { TouchableOpacity, StatusBar, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainerRefContext, useIsFocused, useNavigationState, useRoute } from '@react-navigation/native';
import { Avatar } from '@rneui/themed';
import AutoHeightImage from 'react-native-auto-height-image';
import Logo from '../../assets/images/pagix_logo.png'

import Feed from '../../pages/feed'; 

const Stack = createStackNavigator();

import { navigationRef  } from '../../App'
import { defaultStyles } from '../../utils';
import { Icon } from '@rneui/themed';
import { color } from '@rneui/base';




const NavegarStack = ({ navigation }) => {
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
        component={Feed} 
        options={{
          headerShown: true, 
          // headerTransparent: true,
          headerStyle: defaultStyles.defaultHeaderStyles,
          headerTintColor: '#fff',
          headerTitle: () => null,
          headerLeft: () => 
            <Image
              style={{
                width: 100,
                objectFit: 'contain',
                marginLeft: 10
              }}
              source={Logo}
            />,  
          headerRight: () => <Icon name="notifications" color={"#fff"} style={{marginRight: 15}}/>
        }}
      />
     
    </Stack.Navigator>
  )
}


export default NavegarStack;
