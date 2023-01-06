import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Header(){

    return(
        <View style={styles.header}>
            <Text > Knowledge Zone </Text>
        </View>
    );
};


const styles = StyleSheet.create({
    header:{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    headertext:{
        
    }

});