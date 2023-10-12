import React from "react";
import {View, StyleSheet, Image} from "react-native";

export default function Header(){
    return (
        <View style={{ alignItems: 'center'}}>
            <Image style={styles.logo}
                source={require('../../assets/logo.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    logo:{
        width:100,
        height: 100,
        marginTop: -570,
    }
})