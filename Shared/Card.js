import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
 
function RenderSeparator(){  
    return (  
        <View  
            style={{  
                height: 1,  
                height: 10,
                backgroundColor: "#FFF5E4",  
            }}  
        />  
    );  
  };  

export default function Card({ person }){
    //console.log(person);
    return(
        <View>
            <View style={styles.Container}>
                <Text style={styles.header}>{person.title}</Text>
                <Text>{person.desc}</Text>
            </View>
            <RenderSeparator/>
        </View>
    );
};


const styles = StyleSheet.create({
    Container:{
        padding: 10,
        margin: 10, 
        borderColor: '#8BBCCC',
        borderWidth: 1,
        borderRadius: 15,
    },
    header:{
        fontSize: 18,
        fontWeight: 'bold',
    }
   
});