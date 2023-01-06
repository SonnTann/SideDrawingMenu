import React,  { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Modal, Alert, SafeAreaView} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import ReView from './Review';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen({ navigation }) {

  const [reviews, setReviews] = useState([
    {title: 'ဘကြီးတော် မင်း နန်းတက် သောအခါ မဏိပူရ က သည် း စော်ဘွား သည် မိမိ ဆက် မြဲ ဖြစ် သော ကန်တော့ လက်ဆောင် ကို မ ဆက် ဘဲ နေ ၏ ။ ဘကြီးတော် မင်း သည် စစ်တပ် လွှတ် ၍ မဏိပူရ က သည် း စော်ဘွား ကို ဆုံးမ ၏ ။ က သည် း စော်ဘွား လည်း အင်္ဂလိပ် ပိုင် နယ် သို့ ထွက်ပြေး ရာ မြန်မာ တို့ က ချင်း နင်း လိုက်လံ သဖြင့် အင်္ဂလိပ် တို့ နှင့် စကား များ ကြ ၏ ။ တစ်ဖန် အာသံ စော်ဘွား သည် အင်္ဂလိပ် တို့ ကို အား ထား ၍ သစ္စာဖောက် သည် ကို မြန်မာ တို့ သွားရောက် ဖမ်းဆီး ရာ အင်္ဂလိပ် ပိုင် နယ် သို့ ပြေးဝင် သည် ။ မြန်မာ တို့ က လိုက်လံ ဖမ်းဆီး ရာ အင်္ဂလိပ် တို့ နှင့် စကား များ ကြ သည် ။ မြန်မာ တို့ သည် ဟံသာဝတီ ဆင် ဖြူ များ ရှင် မင်းတရားကြီး ၊ အနောက် ဘက် လွန် မင်း အင်းဝ ဆင်ဖြူရှင် မင်း တို့ ၏ အောင်မြင် မှု များ ကို တွေးတော ကာ၊မာန်မာန ကြီး လျက် ဥရောပ နယ်ချဲ့ ဝါဒ ကို ကောင်း စွာ လေ့လာ ခြင်း မပြုကြချေ။အင်္ဂ တို့ သည် လည်း အာရှ တိုက် တွင် နယ်ချဲ့ ဝါဒ အောင်မြင် မှု ကြောင့် တန်ခိုး ကြီး လျက် တိုး ၍ သာ နယ်ချဲ့ လိုက် ကြ ၏ ။ သို့ဖြစ်၍ ငြိမ်းချမ်း စွာ ဆွေးနွေး ၍ ပြီး ပြေ ကောင်း သော အဆိုပါ အရေး နှစ် ခု တို့ သည် မ ပြီး ပြေ ဘဲ တိုး ၍ သာ ဆိုးရွား လာ ကြ ၏ ။ စစ်သူကြီးသည် အာသံ ပြည် သို့ စစ်ချီ သောအခါ အင်္ဂလိပ် ဘုရင်ခံချုပ် သည် အင်္ဂလိပ် ကွပ်ကဲ သော အိန္ဒိယ စစ် ပါရီ တပ် ကို အာသံ သို့ လွှတ် ၍ ခုခံ စေ သည် ။ တစ်ဖန် မဏိပူရ က သည် း စော်ဘွား များ အား စစ် ကူ ပေး ၍ မြန်မာ တပ် များ ကို တိုက် စေ သည် ။', 
        rating: '5', body: 'lorem ipsum', key: '1'}, 
    {title: 'ဤ သို့ တိုက်ခိုက် နေ ကြ စဉ် အတွင်း စစ်တကောင်း နှင့် ရခိုင် နယ်စပ် တွင် ရှိ သော ရှင် မ ဖြူ ကျွန်း ကို အင်္ဂလိပ် တို့ က သိမ်း ၍ အင်္ဂလိပ် အလံ ကို စိုက် ကြ သည် ။ မြန်မာ တို့ က လည်း ထို ကျွန်း ကို တိုက်ခိုက် သိမ်းယူ ၍ မြန်မာ အလံ စိုက် ကြ သည် ။ ထိုအခါ အင်္ဂလိပ် ဘုရင်ခံချုပ် သည် မိမိပိုင် နယ်မြေ ကို မြန်မာ မင်း က တိုက် သည် ဟု ဆို ၍ စစ် ကြေညာ ပြီးလျှင် မြန်မာ နိုင်ငံ ကို တိုက် ၏ ။ အင်္ဂလိပ် တို့ သည် စနစ်တကျ လေ့ကျင့် ပြီး သော အင်္ဂလိပ် ဂေါ်ရာ နှင့် အိန္ဒိယ စစ် ပါရီ များ ကို အသုံးပြု သည် ။ ခေတ်မီ အ မြောက် သေနတ် နှင့် ရဲမက် တို့ ကို ကာလကတ္တား မြို့ မှ မီးသင်္ဘော များ ဖြင့် အလျင်အမြန် ပို့ သည် ။ အာသံ ပြည် သို့ စစ် တစ် ကြောင်း ၊ ရခိုင် ဘက် သို့ စစ် တစ် ကြောင်း ၊ ရန်ကုန် သို့ စစ် တစ် ကြောင်း ၊ တနင်္သာရီ သို့ စစ် တစ် ကြောင်း ချီ ကြ သည် ။ မြန်မာ စစ် သည် များ သည် စွမ်းအား ရှိ သမျှ ခုခံ တိုက်ခိုက် ကြ သော်လည်း ဆုတ် ရ သည် က များ သည် ။ မဟာဗန္ဓုလ သည် ဓနုဖြူ တိုက်ပွဲ တွင် ကျ ၍ မြန်မာ တို့ စစ်ရှုံး ကြ သည် ။ ၁၈၂၆ ခုနှစ် တွင် စစ် ပြေ ငြိမ်း ၍ ရန္တပို စာချုပ် အရ ၊ ရခိုင် ၊ တနင်္သာရီ နယ်် တို့ ကို မြန်မာ တို့ က ဝင်ရောက် ခြယ်လှယ် ခြင်း မ ပြု မ လုပ် ကြ ရ ။ စစ် စရိတ် အဖြစ် မြန်မာ တို့ က ငွေ တစ် ကုဋေ ပေး ရ သည် ။', 
        rating: '4', body: 'lorem ipsum', key: '2'}, 
    {title: 'ငြိမ်းချမ်း မှု ကို လိုလား သဖြင့် အင်္ဂလိပ် တို့ နှင့် သင့်မြတ် အောင် ဆက်ဆံ ၏ ။ အင်္ဂလိပ် တို့ မြန်မာ တို့ အလို ကို လိုက် သင့် သလောက် လိုက် ကြ ၏ ။ ကာလကတ္တား မြို့ ဘုရင်ခံချုပ် လတ် မင်းကြီး ဒါလဟိုဇီထံသံ လွှတ် ၍ ပဲခူး နယ် ကို ပြန် ပေး ရန် တောင်းဆို သည် မ ရ ချေ ။ အင်္ဂလန် နိုင်ငံ ၊ ပြင်သစ် နိုင်ငံ ၊ အီတလီ နိုင်ငံ တို့ ကို ကင်းဝန်မင်းကြီး ဦးဆောင် သော သံ အဖွဲ့ ကို လွှတ် သည် ။ အမေရိကန် ပြည်ထောင်စု နှင့် လည်း ဆက်ဆံ သည် ။ ဥရောပ တိုက် သို့ ပညာ တော် သင် များ စေလွှတ် ၍ စက်မှုလက်မှု လောကဓာတ် ပညာ များ ကို သင်ကြား စေ သည် ။ မင်းညီမင်းသား ၊ မှူးမတ် ၊ စော်ဘွား ၊ ချင်း ၊ ကချင် ၊ ကရင် စသည် တို့ ကို ထိုက်သင့် အားလျော်စွာ မ စ ချီးမြှင့် ကာ တိုင်းပြည် ကို ငြိမ်းချမ်း စွာ စီမံအုပ်ချုပ် သည် ။ မှန်နန်း ရာဇဝင် တော် ကို ဆက်လက် ရေးသား စေ သည် ။ မန္တလေး တောင် ခြေရင်း တွင် ရတနာပုံ မန္တလေး ဟု ခေါ် သော မြို့ သစ် ကို တည် သည် ။ မန္တလေး တောင်ခြေ ၌မဟာသကျမာရဇိန်( ကျောက်တော်ကြီး ) ဘုရား ၊ မဟာလောကမာရဇိန် ( ကုသိုလ်တော် ) ဘုရား တို့ ကို တည် သည် ။ ပိဋကတ်သုံးပုံ ကို ကျောက်ထက်အက္ခရာတင် သည် ။ ပထမ ပြန် စာ ပေး ပွဲ ကို ဆက်လက် ပြုလုပ် သည် ။ ပဉ္စမ သင်္ဂါယနာတင် သောကြောင့် မင်းတုန်း မင်း ကို ပဉ္စမ သင်္ဂါယနာတင် မင်းတရားကြီး ဟု ခေါ် ၏ ။ ဆည် ဟောင်း မြောင်း ဟောင်း များ ကို ထပ်မံ ပြုပြင် သည် ။ မိတ္ထီလာ ကန် စသော ကန် များ ကို လည်း ပြုပြင် သည် ။ ဆန် စက် ၊ သကြား စက် ၊ သစ် စက် ၊ ရက်ကန်း စက် များ ကို ဥရောပ တိုက် မှ ဝယ်ယူ သည် ။ အင်္ဂလိပ် တို့ နှင့် ကူးသန်း ရောင်းဝယ် ရေး စာချုပ်ချုပ် ဆို သည် ။ အင်္ဂလိပ် ကျောင်း ဆရာကြီး ဆရာ မှတ် အား မြေ နှင့်တကွ အင်္ဂလိပ် စာသင်ကျောင်း ဆောက် ပေး ပြီးလျှင် သား တော် များ ကို အင်္ဂလိပ်စာ သင် စေ သည် ။', 
        rating: '3', body: 'lorem ipsum', key: '3'}, 
  ]);
  
  const addReview = (review) => {
    review.key = Math.random().toString();        
    setReviews((currentReviews)=>{
      return [review, ...currentReviews]
    });
    setModalOpen(false);
  } 

  const[modalOpen, setModalOpen] = useState(false);

  function onClickAlertHandlear(){
    Alert.alert('Hi!') 
  } 

  const renderSeparator = () => {  
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

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Modal visible={modalOpen} animationType='slide' > 
            <View style={styles.modelContent}>
              
              <MaterialIcons
                name='close'
                size={24}
                style= {{...styles.modalToggle, ...styles.modalClose}}
                onPress= { ()=> setModalOpen(false) }
              />
             
                  <View style={styles.logosort}>
                      <TouchableOpacity style={styles.logoframe} onPress={onClickAlertHandlear} >
                        <Image style={ styles.imageSize } source={require('../assets/logos/Lays_(1).png')}  />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.logoframe} onPress={onClickAlertHandlear} >
                        <Image style={styles.imageSize } source={require('../assets/logos/Lays_(1).png')}  />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.logoframe} onPress={onClickAlertHandlear} >
                        <Image style={styles.imageSize} source={require('../assets/logos/Lays_(1).png')}  />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.logoframe} onPress={onClickAlertHandlear} >
                        <Image style={styles.imageSize} source={require('../assets/logos/Lays_(1).png')}  />
                      </TouchableOpacity>
                  </View>  
                  <View style={styles.logosort2}>
                      <TouchableOpacity style={styles.logoframe} onPress={onClickAlertHandlear} >
                        <Image style={ styles.imageSize } source={require('../assets/logos/Lays_(1).png')}  />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.logoframe} onPress={onClickAlertHandlear} >
                        <Image style={styles.imageSize } source={require('../assets/logos/Lays_(1).png')}  />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.logoframe} onPress={onClickAlertHandlear} >
                        <Image style={styles.imageSize} source={require('../assets/logos/Lays_(1).png')}  />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.logoframe} onPress={onClickAlertHandlear} >
                        <Image style={styles.imageSize} source={require('../assets/logos/Lays_(1).png')}  />
                      </TouchableOpacity>
                  </View>  
                  <View style={styles.logosort3}>
                      <TouchableOpacity style={styles.logoframe} onPress={onClickAlertHandlear} >
                          <Image style={ styles.imageSize } source={require('../assets/logos/Lays_(1).png')}  />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.logoframe} onPress={onClickAlertHandlear} >
                        <Image style={styles.imageSize } source={require('../assets/logos/Lays_(1).png')}  />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.logoframe} onPress={onClickAlertHandlear}>
                        <Image style={styles.imageSize} source={require('../assets/logos/Lays_(1).png')}  />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.logoframe} onPress={onClickAlertHandlear} >
                        <Image style={styles.imageSize} source={require('../assets/logos/Lays_(1).png')}  />
                      </TouchableOpacity>
                  </View>  
              <ScrollView>
                  <View style={styles.logosort5}>
                    <ReView addReview={addReview}  />
                  </View>
              </ScrollView>
            </View>
        </Modal>
        
        <MaterialIcons 
          name='add' 
          size={24}
          onPress={ ()=> setModalOpen(true) }
          style = { styles.modalToggle }
        />

        <FlatList  
          data={reviews}  
          renderItem={({item}) => (
            <TouchableOpacity onPress={()=>navigation.navigate('Detail Screen', { body:item.title, title: item.body } )}>
                <Text style={styles.titletext}> 
                      {item.title} 
                </Text>
            </TouchableOpacity>
              )   
          }  
          ItemSeparatorComponent={renderSeparator}   
        />


      </View>
    );
  };


  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF5E4'
    },
    titletext: {
        fontFamily: 'MyanmarFonts',
        fontSize: 10,
        justifyContent: "center",
        textAlign: 'justify',
        padding: 15
    }, 
    buttonStyle: {
        textAlign: "right",
    }, 
    item:{
        justifyContent: 'center',
        textAlign: 'justify',
        padding: 15
    }, 
    modelContent:{
        //  backgroundColor: '#181818',
        backgroundColor: '#FEFBF6',
        height: "100%"
    },
    modalToggle: {
      marginBottom: 5,
      borderWidth: 1,
      borderColor: '#f3f3f3',
      //padding: 5,
      borderRadius: 10,
      alignSelf: 'center',
      backgroundColor: '#D2DAFF',
      marginTop: 20
    },
    modalClose:{
      marginTop: 20, 
      marginBotton: 0,
    },
    modatText:{
      padding: 15,
    },
    logosort: {
      flex: 1,
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 10,
      marginTop: 10,
    }, 
    logosort2: {
      flex: 2,
      flexDirection: "row", 
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 20,
      marginTop: 40,
    }, 
    logosort3: {
      flex: 3,
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 30,
      //marginTop: 10,
    }, 
    logosort4: {
      flex: 4,
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'center',
    }, 
    logosort5: {
      flex: 5,
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
    }, 
    imageSize:{
      width: 80,
      height: 90,
      resizeMode: 'contain',
    },  
    logoframe:{
      width: 60,
      height: 60,
      margin: 15
    }, 
    
    
  });