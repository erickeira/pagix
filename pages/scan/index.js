import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ScrollView, Text, View,StyleSheet, SafeAreaView, Animated, Dimensions, useWindowDimensions, ActivityIndicator, FlatList, TouchableOpacity  } from "react-native";
import { defaultColors } from '../../utils';
import { Icon, Image } from '@rneui/base';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Scan(){
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [loading, setLoading ] = useState(true)
    const [checked, setChecked] = React.useState([false, false]);

    const larguraImagem = windowWidth;
    const alturaImagem = 340

    const LeituraRoute = () => {
        const capitulos = [
            {
              name: 'Amy Farha',
              avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              subtitle: 'Vice President'
            },
            {
              name: 'Chris Jackson',
              avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
              subtitle: 'Vice Chairman'
            }
        ]

        return (
            <View style={styles.containerPage}>
                <Text style={{color: '#fff', marginBottom: 10}}>Capitulos</Text>
                {
                    capitulos.map((cap, index) => {
                        return(
                            <TouchableOpacity 
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: 10,
                                    paddingVertical: 12
                                }}
                                key={index}
                            >
                                <View style={{borderWidth: 1, backgroundColor: defaultColors.activeColor, borderRadius: 3, padding: 2}}>
                                    <Icon name="check" type="antdesign" color={'#fff'} size={16}/>
                                </View>
                                <View style={{display: 'flex', justifyContent: 'center'}}>
                                    <Text style={{color: '#fff'}}>
                                        Cap. {index}
                                    </Text>
                                </View>
                                
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    };
      
    const DetalhesRoute = () => (
        <View style={styles.containerPage} />
    );
    const ComentariosRoute = () => (
        <View style={styles.containerPage} />
    );

    useEffect(() => {
        setLoading(false)
    },[])

    return (
        <ScrollView >
            <Image 
                source={{uri: 'https://cover.nexoscans.net/wp-content/uploads/2023/11/resource.jpg'}}
                style={{width: larguraImagem, height: alturaImagem, objectFit: 'cover', borderRadius: 0}} 
                // resizeMode="cover"
            />
            
            <View style={styles.container}>
                <LeituraRoute/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: -30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        width: '100%',
        minHeight: '60%',
        backgroundColor: defaultColors.secundary
    },
    containerPage: {
        paddingHorizontal: 10,
        paddingVertical: 20
    }
});