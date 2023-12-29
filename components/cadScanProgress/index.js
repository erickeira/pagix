import React, {useEffect, useState }from "react";
import { Image, ScrollView, Text, View, StyleSheet,Dimensions, TouchableOpacity} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { defaultColors } from "../../utils";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import ProgressBar from "../progressBar";
import { supabase } from "../../utils";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function CardScanProgress({ data, grid, saved }){
    const {
        scan_id,
        scan_nome,
        scan_tags,
        scan_image
    } = data
    const navigation = useNavigation()
    const [isSaved, setIsSaved ] = useState(saved)
    const [tags, setTags] = useState([])

    const larguraImagem = windowWidth * 0.33;
    const alturaImagem = larguraImagem * 1.3
    const styles = StyleSheet.create({ 
        container: {
            flex: 1,
            minHeight: 110,
            paddingVertical: 15,
            paddingHorizontal: 10,
            display: 'flex',
            flexDirection: 'row',
            gap: 10
        },
        containerGrid:{
            width: larguraImagem,
            minHeight: 110,
            paddingVertical: 10,
            gap: 10
        },
        containerDesc: {
            flex: 1, 
            paddingRight: 10,
        },
        containerDescGrid: {
            width: '100%',
            paddingHorizontal: 5,
        },
        containerIcon:{
            // flex: 1
            width: 45,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        containerButton:{
            backgroundColor: defaultColors.activeColor,
            borderRadius: 100,
            width: 35,
            height: 35,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: 70,
            right: 10,
            backgroundColor:  'rgba( 1, 1,1,0.6)'
        }
    });

    const handleNavigation = () => {
        navigation.navigate("Scan", { scan_id })
    }

    const handleSave = () => {
        setIsSaved(!isSaved)
    }

    const ButtonAdd = ({saved}) => {
        return(
            <TouchableOpacity onPress={handleSave} style={{...styles.containerButton}}>
                <Icon 
                    name={saved ? "bookmark" : "bookmark-outline"} 
                    type="ionicons" 
                    size={20}
                    color={saved ? "#FAFF00" : "white"}
                />
            </TouchableOpacity>
        )
    }

    if(grid){
        return (
            <TouchableOpacity onPress={handleNavigation} style={styles.containerGrid}>
                <Image 
                    source={{uri: scan_image}}
                    style={{width: larguraImagem, height: alturaImagem, objectFit: 'contain', borderRadius: 4}} 
                />
                <View  style={styles.containerDescGrid}>
                    <Text style={{color: '#fff'}}>{scan_nome}</Text>
                    { saved ? <ProgressBar progress={'50%'}  color={'#4784E0'}/> : null }
                </View>
                <ButtonAdd saved={isSaved}/>
            </TouchableOpacity>
        );
    }
    return (
        <TouchableOpacity onPress={handleNavigation}  style={styles.container}>
            <Image 
                source={{uri: scan_image}}
                style={{width: 80, height: 100, objectFit: 'contain', borderRadius: 4}} 
            />
            <View  style={styles.containerDesc}>
                <Text style={{color: '#fff'}}>{scan_nome}</Text>
                <Text style={{fontSize: 10, color: '#fff'}}>{scan_tags}</Text>
                <Text style={{fontSize: 10, color: '#fff', marginTop: 20}}>Lendo</Text>
                <ProgressBar progress={'50%'} color={'#4784E0'}/>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{fontSize: 12, color: '#fff'}}>40%</Text>
                    <Text style={{fontSize: 12, color: '#fff'}}>35/86</Text>
                </View>
            </View>
            <ButtonAdd saved={isSaved} />
        </TouchableOpacity>
    );
}

