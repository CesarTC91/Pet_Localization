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
            <Text style={{fontSize:10, fontWeight:'bold', textAlign:'center'}}>Don`t you have a account? <Text style={{color:'red'}}>Sing Up</Text></Text>
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