import React from "react";
import {View,  StyleSheet, Button} from "react-native";

export default function Footer(){
    return(
        <View style={styles.containerFooter}>
            <Button
                title="Log In"
                color = "#776056"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerFooter: {
        justifyContent: 'center',
        borderRadius:15
    },
})