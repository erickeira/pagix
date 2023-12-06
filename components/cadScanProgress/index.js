import React from "react";
import { Image, ScrollView, Text, View, StyleSheet,Dimensions, TouchableOpacity} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { defaultColors } from "../../utils";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import ProgressBar from "../progressBar";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function CardScanProgress({ titulo }){
    const navigation = useNavigation()

    return (
        <TouchableOpacity style={styles.container}>
            <Image 
                source={{uri: 'https://cover.nexoscans.net/wp-content/uploads/2023/11/resource.jpg'}}
                style={{width: 80, height: 110, objectFit: 'contain', borderRadius: 4}} 
            />
            <View  style={styles.containerDesc}>
                <Text style={{color: '#fff'}}>The Novel's Extra</Text>
                <Text style={{fontSize: 10, color: '#fff'}}>Ação, Aventura, Romance, Shounen, Vida Escola</Text>
                <ProgressBar progress={'50%'} color={'#4784E0'}/>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{fontSize: 12, color: '#fff'}}>40%</Text>
                    <Text style={{fontSize: 12, color: '#fff'}}>35/86</Text>
                </View>
            </View>
            <View style={styles.containerIcon}>
                <Icon name="right" type="antdesign" color="#fff" size={15}/>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        paddingVertical: 30,
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    containerDesc: {
        flex: 1, 
        flexWrap: 'wrap',
    },
    containerIcon:{
        // flex: 1
        width: 45,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});