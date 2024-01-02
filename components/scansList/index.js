import React from "react";
import { Image, ScrollView, Text, View, StyleSheet,Dimensions, TouchableOpacity, FlatList} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { defaultColors } from "../../utils";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import CardScanProgress from "../cadScanProgress";
import { RefreshControl } from "react-native-gesture-handler";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ScansList({ data, grid, ListHeaderComponent, onRefresh,loading }){
    const navigation = useNavigation()
    return (
        <FlatList
            data={data}
            refreshControl={ <RefreshControl refreshing={loading} onRefresh={onRefresh} tintColor={ '#fff' } /> } 
            renderItem={({item}) => <CardScanProgress grid={grid} data={item}/>}
            keyExtractor={item => item.scan_id}
            style={{height: '100%'}}
            numColumns={grid ? 3 : 1}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={ListHeaderComponent || <></>}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 30,
    },
  });