import React from "react";
import {View,  StyleSheet, Button, TouchableOpacity, Text} from "react-native";

export default function Footer(){
    return(
        <View  style={styles.containerFooter}>
            <TouchableOpacity >
                <Button
                    title={'Log In'}
                    color={'#776056'}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    containerFooter: {
        justifyContent: 'center',
        padding:1.5,
        borderRadius:15
    },
})