
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { StyleSheet } from 'react-native';

export const baseUrl = "https://neoxscans.vercel.app/"
export const apiUrl = `${baseUrl}api/`

var api  = axios.create({
    baseURL: apiUrl,
    headers: { 'Content-Type': 'application/json' },
});

const defaultColors = {
    primary : '#202123',
    secundary: '#27292E',
    activeColor: '#069B03'
}
const defaultStyles = StyleSheet.create({
    defaultHeaderStyles: {
        backgroundColor: defaultColors.primary,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 6
    },
    tituloCategoria:{
        fontWeight: '700',
        color: '#666',
        marginVertical: 10,
        fontFamily: 'Roboto'
    }
})


export {
    api,
    defaultStyles,
    defaultColors
}