import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ScrollView, Text, View,StyleSheet, SafeAreaView, Animated } from "react-native";

import PostList from '../../components/postList';
import DefaultButton from '../../components/defaultButton';
import { FlatList } from 'react-native';
import Post from '../../components/post';

export default function Navegar(){
    const [ postsFilter, setPostsFilter] = useState("feed")

    const [posts, setPosts] = useState([{id: 1},{id: 2},{id: 3},{id: 4},{id: 5}])

    return (
        <View style={styles.container}>
            <View style={styles.containerButtons}>
                <DefaultButton active={postsFilter == 'feed'} titulo={'Feed'} onPress={() => setPostsFilter('feed')}/>
                <DefaultButton active={postsFilter == 'seguindo'} titulo={'Seguindo'} onPress={() => setPostsFilter('seguindo')}/>
                <DefaultButton active={postsFilter == 'amigos'} titulo={'Amigos'} onPress={() => setPostsFilter('amigos')}/>
            </View>
            <PostList data={posts}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    containerButtons:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10
    }
  });