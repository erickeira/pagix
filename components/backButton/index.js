import React from "react";
import { Image, ScrollView, Text, View, StyleSheet,Dimensions, TouchableOpacity} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { defaultColors } from "../../utils";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function BackButton({ }){
    const navigation = useNavigation()

    const styles = StyleSheet.create({ 
        container: {
            marginLeft: 15,
            borderRadius: 300,
            backgroundColor: 'rgba( 1, 1,1,0.4)',
            width: 45,
            height: 45,
            display: 'flex',
            justifyContent: 'center'
        },
    });

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.goBack()}>
            <Icon name="arrowleft" type="antdesign" color={"white"}/>
        </TouchableOpacity>
    );
}

