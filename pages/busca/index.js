import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ScrollView, Text, View,StyleSheet, SafeAreaView, Animated } from "react-native";
import ScansList from '../../components/scansList';
import { SearchBar } from '@rneui/themed';
import { defaultColors, supabase } from '../../utils';

export default function Busca(){
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false)

    const updateSearch = (search) => {
        setSearch(search);
    };

    const [scans, setScans] = useState([])

    const handleGetScans = async () => {
        let { data: scans, error } = await supabase.from('scans').select('*')
        console.log(scans)
        if(!error){
            setScans(scans)
        }
    }

    useEffect(() => {
        handleGetScans()
    },[])

    return (
        <SafeAreaView style={styles.container}>
            <SearchBar
                placeholder="Título, autor, site."
                onChangeText={updateSearch}
                value={search}
                containerStyle={{backgroundColor: defaultColors.primary, borderWidth: 0, marginBottom: 10}}
            />
            <ScansList 
                data={scans} 
                grid
                loading={loading}
                onRefresh={handleGetScans}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 15
    },
});