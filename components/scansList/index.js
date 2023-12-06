import React from "react";
import { Image, ScrollView, Text, View, StyleSheet,Dimensions, TouchableOpacity, FlatList} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { defaultColors } from "../../utils";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import ScanCard from "../scanCard";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ScansList({ data }){
    const navigation = useNavigation()


    return (
        <FlatList
            data={data}
            renderItem={({item}) => <ScanCard data={item}/>}
            keyExtractor={item => item.id}
            style={{height: '100%'}}
            numColumns={3}
            showsVerticalScrollIndicator={false}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 30,
    },
  });