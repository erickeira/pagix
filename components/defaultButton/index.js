import React from "react";
import { Image, ScrollView, Text, View, StyleSheet,Dimensions, TouchableOpacity} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { defaultColors } from "../../utils";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function DefaultButton({ titulo, onPress, active }){
    const navigation = useNavigation()

    const styles = StyleSheet.create({ 
        container: {
            flex: 1,
            paddingVertical: 8,
            paddingHorizontal: 15,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: active ? defaultColors.activeColor : defaultColors.secundary,
            borderRadius: 4
        },
    });

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={{color: '#fff'}}>{titulo}</Text>
        </TouchableOpacity>
    );
}

