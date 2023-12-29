import React from "react";
import { Image, ScrollView, Text, View, StyleSheet,Dimensions, TouchableOpacity} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { defaultColors } from "../../utils";
import { Icon, color } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ProgressBar({ progress, style, color, width}){
    const navigation = useNavigation()
    const styles = StyleSheet.create({ 
        container: {
            width: width || '100%',
            backgroundColor: '#adadad',
            height: 3,
            borderRadius: 5,
            marginVertical: 5,
            marginTop: 8
        },
        progress:{
            backgroundColor: color,
            height: '100%',
            width: progress,
            borderRadius: 5
        }
    });

    return (
        <View style={{ ...styles.container, ...style }}>
            <View style={styles.progress}/>
        </View>
    );
}

