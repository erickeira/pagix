import React from "react";
import { Image, ScrollView, Text, View, StyleSheet,Dimensions, TouchableOpacity} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { defaultColors } from "../../utils";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from '@rneui/themed';
import { Divider } from '@rneui/themed';
import CardScanProgress from "../cadScanProgress";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Post({ titulo }){
    const navigation = useNavigation()

    const ButtonAction = ({titulo, iconName}) => {
        return(
            <TouchableOpacity style={{display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center', paddingHorizontal: 5, paddingVertical: 8}}>
                <Icon name={iconName} color={'#fff'} size={14}/>
                <Text style={{fontSize: 11}}>{titulo}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <TouchableOpacity style={{display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center',paddingBottom: 10}}>
                    <Avatar
                        size={30}
                        rounded
                        source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
                        key={'123'}
                    />
                    <Text>Erickola</Text>
                </TouchableOpacity>
                <Text style={{fontSize: 10, color: '#666'}}>hà uma hora</Text>
            </View>
            <Text style={{marginBottom: 10}}>Explorando as fronteiras entre a realidade e o sobrenatural, este mangá cativa com sua trama envolvente e personagens profundamente fascinantes.</Text>
            <Divider />
            <CardScanProgress />
            <Divider style={{marginBottom: 5}}/>
            <View style={{display: 'flex', flexDirection: 'row', gap: 20, alignItems: 'center',}}>
                <ButtonAction titulo={'3 curtidas'} iconName={'favorite-border'}/>
                <ButtonAction titulo={'1 comentário'} iconName={'insert-comment'}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 4,
        marginBottom: 15,
        backgroundColor: defaultColors.secundary
    },
  });