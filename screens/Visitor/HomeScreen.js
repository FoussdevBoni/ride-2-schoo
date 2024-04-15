import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Banner from '../../components/sections/Visitor/HomeScreen/Banner';

import ButtonsAction from '../../components/sections/Visitor/HomeScreen/ButtonsAction';

const HomeScreen = ()=> {
    return (
        <ScrollView horizontal={false} style={styles}>
             <View style={styles.banner}>
                <Banner />
             </View>
             <View style={styles.buttonsAction}>
                <ButtonsAction />
             </View>
        </ScrollView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1 
    },
    banner: {

    },
    services: {

    }
})