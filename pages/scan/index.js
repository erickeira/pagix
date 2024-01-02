import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ScrollView, Text, View,StyleSheet, SafeAreaView, Animated, Dimensions, useWindowDimensions, ActivityIndicator, FlatList, TouchableOpacity  } from "react-native";
import { defaultColors } from '../../utils';
import { Icon, Image } from '@rneui/base';
import ProgressBar from "../../components/progressBar";
import { supabase } from '../../utils';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Scan({ route }){
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [loading, setLoading ] = useState(true)
    const [scan, setScan] = React.useState({});
    const capitulos = Array.from({ length: scan?.scan_capitulos || 0 }, (v, i) => i);
    const [lidos, setLidos] = useState([ 1 , 2, 3])
    const porcetagemLida =  Math.round((lidos.length * 100) / capitulos.length)
    console.log(porcetagemLida)
    const { scan_id } = route.params

    const handleGetScan = async () => {
        let { data: scan, error } = await supabase.from('scans').select().eq('scan_id', scan_id )
        console.log(scan)
        if(!error){
            setScan(scan[0])
        }
        setLoading(false)
    }

    useEffect(() => {
        handleGetScan()
    },[])

    const handleChangeLido = (cap, lido) => {
        let auxLidos = lidos
        if(lido) auxLidos = auxLidos.filter(capLido => capLido != cap)
        else auxLidos.push(cap)
        setLidos(auxLidos)
    }
    const handleAll = () => {
        if(lidos.length == capitulos.length) setLidos([])
        else setLidos(capitulos)
    }
    const larguraImagem = windowWidth;
    const alturaImagem = 560

    const LeituraRoute = () => {
        return (
            <View style={styles.containerPage}>
                <Text style={{color: '#fff'}}>{scan?.scan_nome}</Text>
                <Text style={{fontSize: 10, color: '#fff'}}>{scan?.scan_tags}</Text>
               
                {
                    capitulos.length ? 
                    <>
                    <ProgressBar progress={`${porcetagemLida}%`} color={'#4784E0'}/>
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.3, marginBottom: 10, paddingBottom: 18}}>
                        <Text style={{fontSize: 12, color: '#fff'}}>{porcetagemLida}%</Text>
                        <Text style={{fontSize: 12, color: '#fff'}}>{lidos.length}/{capitulos.length}</Text>
                    </View>
                    <TouchableOpacity 
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            gap: 10,
                            paddingVertical: 20
                        }}
                        key={index}
                        onPress={handleAll}
                    >
                        <View style={{display: 'flex', justifyContent: 'center'}}>
                            <Text style={{color: '#666'}}>
                               Marcar todos como lidos
                            </Text>
                        </View>
                        <View 
                            style={{
                            borderWidth: 1, 
                            backgroundColor: lidos.length == capitulos.length ? defaultColors.activeColor : 'none', 
                            borderColor: '#fff',
                            width: 23,
                            height: 23,
                            borderRadius: 3, 
                            borderWidth: 0.3,
                            padding: 2
                            }}>
                            { lidos.length == capitulos.length ?  <Icon name="check" type="antdesign" color={'#fff'} size={16}/> : null }
                        </View>                                
                    </TouchableOpacity>
                    {
                        capitulos.map((cap, index) => {
                            let lido = lidos?.includes(index)
                            return(
                                <TouchableOpacity 
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        gap: 10,
                                        paddingVertical: 12
                                    }}
                                    key={index}
                                    onPress={() => handleChangeLido(index, lido)}
                                >
                                    <View style={{display: 'flex', justifyContent: 'center'}}>
                                        <Text style={{color: '#fff'}}>
                                            Capitulo. {cap}
                                        </Text>
                                    </View>
                                    <View 
                                        style={{
                                        borderWidth: 1, 
                                        backgroundColor: lido ? defaultColors.activeColor : 'none', 
                                        borderColor: '#fff',
                                        width: 23,
                                        height: 23,
                                        borderRadius: 3,
                                        borderWidth: 0.3, 
                                        padding: 2
                                        }}>
                                        { lido ?  <Icon name="check" type="antdesign" color={'#fff'} size={16}/> : null }
                                    </View>                                
                                </TouchableOpacity>
                            )
                        })
                    }
                    </>
                    : 
                    <View 
                        style={{
                            borderTopWidth: 0.3,
                            paddingVertical: 30,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text style={{color: '#666'}}>Nenhum capítulo encontrado</Text>
                    </View>
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
        <ScrollView style={{height: windowHeight}}>
            <View style={{larguraImagem, height: alturaImagem,}}>
                <Image 
                    source={{uri: scan?.scan_image}}
                    style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0}} 
                    // resizeMode="cover"
                />
                <ActivityIndicator style={{marginTop: 150}}/>
            </View>
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
        minHeight: '100%',
        backgroundColor: defaultColors.secundary
    },
    containerPage: {
        paddingHorizontal: 25,
        paddingVertical: 20
    }
});