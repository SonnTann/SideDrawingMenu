import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function DeScreen({ navigation, route }) {
    return (
      <View style={styles.container}>
        {<Text style={styles.titletext} >{route.params.title}</Text> }
        {<Text style={styles.item} >{route.params.body}</Text> }
        <Button
          onPress={() => navigation.navigate('Home')}
          title="Go To Home"
        />
      </View>
    );
};
export default DeScreen;

const styles = StyleSheet.create({
  container: {
    //height: '100%',
    // flex: 1,
  },
  titletext: {
      fontFamily: 'MyanmarFonts',
      fontSize: 20,
      fontWeight: 'bold',
      justifyContent: "center",
      textAlign: 'justify',
      paddingLeft: 15,
      paddingBottom: 2,
      paddingTop:5
  }, 
  buttonStyle: {
      textAlign: "right",
  }, 
  item:{
      fontFamily: 'MyanmarFonts',
      fontSize: 10,
      justifyContent: 'center',
      textAlign: 'justify',
      padding: 15,
  }

});