import React from "react";
import { Image, ScrollView, Text, View, StyleSheet,Dimensions, TouchableOpacity, FlatList} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/base";
import { defaultColors } from "../../utils";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ScanCard({ data }){
    const navigation = useNavigation()

    const larguraImagem = windowWidth * 0.33;
    const alturaImagem = larguraImagem * 1.3

    const ButtonAdd = ({added}) => {
        return(
            <TouchableOpacity style={{...styles.containerButton,...{ backgroundColor: added ? defaultColors.activeColor : '#666'}}}>
                <Icon name={added ? 'check': 'add'} color={'#fff'}/>
            </TouchableOpacity>
        )
    }
    console.log(data)
    return (
        <View>
            <TouchableOpacity style={styles.container}>
                <Image 
                    source={{uri: 'https://cover.nexoscans.net/wp-content/uploads/2023/11/resource.jpg'}}
                    style={{width: larguraImagem, height: alturaImagem, objectFit: 'contain', borderRadius: 5}} 
                    resizeMode="contain"
                />
                <Text style={{color: '#fff',fontSize: 12, paddingHorizontal: 5, paddingVertical: 5}}>The Novel's Extra</Text>
            </TouchableOpacity>
            <ButtonAdd added={data.id == '1'}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
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
        bottom: 40,
        right: 10
    }
});