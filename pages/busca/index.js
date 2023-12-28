import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ScrollView, Text, View,StyleSheet, SafeAreaView, Animated } from "react-native";
import ScansList from '../../components/scansList';
import { SearchBar } from '@rneui/themed';
import { defaultColors } from '../../utils';

export default function Busca(){
    const [ scansFilter, setScansFilter] = useState("feed")
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
    setSearch(search);
    };

    const [scans, setScans] = useState([{id: 1},{id: 2},{id: 3},{id: 4},{id: 5}])

    return (
        <SafeAreaView style={styles.container}>
            <SearchBar
                placeholder="Título, autor, site."
                onChangeText={updateSearch}
                value={search}
                containerStyle={{backgroundColor: defaultColors.primary, borderWidth: 0, marginBottom: 10}}
            />
            <ScansList data={scans}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 15
    },
});