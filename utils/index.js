
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { StyleSheet } from 'react-native';
import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'

const baseUrl = "https://neoxscans.vercel.app/"
const apiUrl = `${baseUrl}api/`
const supabase = createClient('https://pdiiclsznllcwghkvvdn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkaWljbHN6bmxsY3dnaGt2dmRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM4NzY1NzcsImV4cCI6MjAxOTQ1MjU3N30.digZvM1qK8kwL6uIsUaW27FejT8c2EFfaBYBvc2INDE')

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
    baseUrl,
    apiUrl,
    defaultStyles,
    defaultColors,
    supabase
}