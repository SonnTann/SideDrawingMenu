import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Field, Formik } from "formik";
import { TextInput } from "react-native-gesture-handler";

export default function ReView({ addReview }){
    return(
        <View style={styles.contain}>
            <Formik 
                initialValues={{ title: '', body: '', rating: '' }}
                onSubmit= {(values, actions)=>{
                    actions.resetForm();
                    addReview(values);
                }}
            >
            {(props) => (
                <View style={styles.textBoxFrame}>
                    <TextInput
                        placeholder= 'Review Title'
                        onChangeText ={props.handleChange('title')}
                        value= {props.values.title}
                        style={styles.textBoxStyle}
                        keyboardType="ascii-capable"
                    />
                     <TextInput
                        placeholder= 'Review Body'
                        onChangeText ={props.handleChange('body')}
                        value= {props.values.body}
                        style={styles.textBoxStyle}
                        keyboardType="ascii-capable"
                    />
                    <TextInput
                        placeholder= 'Rating (1-5)'
                        onChangeText ={props.handleChange('rating')}
                        value= {props.values.rating}
                        style={styles.textBoxStyle}
                        keyboardType="number-pad"
                    />
                    <Button title='submit' color='maroon' onPress={props.handleSubmit} />
                </View>
            )}
            </Formik>
        </View>
    );

}

const styles = StyleSheet.create({
    contain:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBoxFrame:{
        width: "100%",
        backgroundColor: "#3AB0FF", 
        padding: 20,
    }, 
    textBoxStyle: {
        borderWidth: 1,
        height: 50,
        backgroundColor: "#E8F9FD", 
        borderColor: '#ffffff',
        margin: 10,
        borderRadius: 10,
    }
    

});