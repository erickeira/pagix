import React from "react";
import { Image, ScrollView, Text, View, StyleSheet,Dimensions, TouchableOpacity} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { defaultColors } from "../../utils";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { ProgressBar } from 'react-native-paper';

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
                <Text>The Novel's Extra</Text>
                <Text style={{fontSize: 10}}>Ação, Aventura, Romance, Shounen, Vida Escola</Text>
                <ProgressBar progress={0.5} color={'#4784E0'} style={{marginBottom:10,marginTop: 15, width: windowWidth * 0.6}}/>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: windowWidth * 0.6 }}>
                    <Text style={{fontSize: 12}}>40%</Text>
                    <Text style={{fontSize: 12}}>35/86</Text>
                </View>
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
        flexWrap: 'wrap'
    }
  });