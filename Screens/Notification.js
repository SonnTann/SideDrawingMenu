import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import Card from '../Shared/Card';


function NotiScreen({ navigation }) {
    const [cards, setCards] = useState([
      {
        title: 'Top up',
        desc: 'Top up any number'
      },
      {
        title: 'Top up history',
        desc: 'View all of the top up you have made'
      }
    ]); 
    
    return (
      <View>
        {
        cards.map((icard)=>{
          return(
            <View key={icard.title}>
              <Card person={icard} />
            </View>
          );
        })
        }
        <Button
          onPress={() => navigation.navigate('Home')}
          title="Go To Home"
        />
      </View>
    );
};
export default NotiScreen;