import React, { useState } from "react";
import { Image, ScrollView, Text, View, StyleSheet,Dimensions, TouchableOpacity} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { defaultColors } from "../../utils";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HeaderSaveButton({ }){
    const navigation = useNavigation()
    const [saved, setSaved] = useState(false)

    const styles = StyleSheet.create({ 
        container: {
            marginRight: 15,
            borderRadius: 300,
            backgroundColor: 'rgba( 1, 1,1,0.4)',
            width: 45,
            height: 45,
            display: 'flex',
            justifyContent: 'center'
        },
    });

    const handleSave = async () => {
        setSaved(!saved)
    }

    return (
        <TouchableOpacity style={styles.container} onPress={handleSave}>
            <Icon 
                name={saved ? "bookmark" : "bookmark-outline"} 
                type="ionicons" 
                color={saved ? "#FAFF00" : "white"}
            />
        </TouchableOpacity>
    );
}

