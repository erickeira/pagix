import React, { useState, useEffect } from 'react';
import { StatusBar, Platform,Modal, SafeAreaView,View, Image, Dimensions,Text, TextInput,Linking } from 'react-native';
import MyDrawer from './routes/index'
import {  NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import NetInfo from "@react-native-community/netinfo";
import { PaperProvider } from 'react-native-paper';
import codePush from "react-native-code-push";
import { defaultColors, defaultStyles } from './utils';
import AuthProvider from './context'

const height = Dimensions.get('screen').height;

if (Text.defaultProps == null) {
    Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
}

if (TextInput.defaultProps == null) {
    TextInput.defaultProps = {};
    TextInput.defaultProps.allowFontScaling = false;
}

export const navigationRef = React.createRef();

function App() {

    const [ connectionOff, setConnectionOff ] = useState(false);
   
	useEffect(() => {
        if(Platform.OS == 'android') StatusBar.setBackgroundColor(defaultColors.primary, true);
        StatusBar.setBarStyle('light-content', true);
 
		const unsubscribe = NetInfo.addEventListener(state => {
			if (state.isConnected) {
				setConnectionOff(false);
			} else {
				setConnectionOff(true);
			}
		});       
        return () => unsubscribe();
	},[]);

    const routeNameRef  = React.useRef();

    return (
        <AuthProvider>
            <NavigationContainer 
                ref={navigationRef}
                theme={theme}
            >
                <Modal 
                    animationType="none" 
                    transparent={true}
                    visible={ connectionOff }
                    presentationStyle="overFullScreen"
                >
                <View style={{ flex: 1, backgroundColor: 'grey', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={[ { fontSize: 26, textAlign: 'center', marginBottom: 10 } ]}>Oops...</Text>
                    <Text style={{ fontSize: 14, lineHeight: 20, textAlign: 'center', paddingHorizontal: 40, marginBottom: 30 }}>Você está off-line.{"\n"}Verifique a sua conexão.</Text>					
                </View>

                </Modal>
                    <MyDrawer/>
            </NavigationContainer>
        </AuthProvider>
    )
    
}

const codePushOptions = {
    checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
    installMode: codePush.InstallMode.ON_NEXT_RESUME
};

export default App;
// export default codePush(codePushOptions)(App);
const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: defaultColors.primary,
      secondaryContainer: defaultColors.secundary,
    },
};