import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ScrollView, Text, View,StyleSheet, SafeAreaView, Animated, FlatList } from "react-native";
import CardScanProgress from '../../components/cadScanProgress';
import ScansList from '../../components/scansList';
import { defaultColors, supabase } from '../../utils';

export default function Leituras(){
    const [scans, setScans] = useState([])
    const [loading, setLoading] = useState(false)

    const handleGetScans = async () => {
        let { data: scans, error } = await supabase
            .from('scans')
            .select('*, leitura (lei_lidos)')
        if(!error){
            setScans(scans)
        }
    }
    console.log(scans)

    useEffect(() => {
        handleGetScans()
    },[])

    return (
        <SafeAreaView style={styles.container}>
            <ScansList
                data={scans}
                ListHeaderComponent={
                    <View
                        style={{
                            borderBottomColor: '#fff',
                            paddingVertical: 15,
                            borderBottomWidth: 0.3,
                            borderBottomColor: '#fff',
                            marginHorizontal: 10,
                            marginBottom: 10
                        }}
                    >
                        <Text 
                            style={{
                                color: '#fff',
                                fontSize: 17,
                            }}
                        >
                            Minhas leituras ({scans.length})
                        </Text>
                    </View>
                }
                loading={loading}
                onRefresh={handleGetScans}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: '100%',
    },
});