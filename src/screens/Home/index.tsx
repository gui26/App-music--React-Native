import { useNavigation } from '@react-navigation/core';
import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { LinearGradient} from 'expo-linear-gradient';
import { theme } from '../../../global/themes';
import Slider from '@react-native-community/slider';
import  Modal from 'react-native-modal';
import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

import { Audio } from 'expo-av';

import Alok from '../../../assets/img/Alok.png';
import {
    Text,
    TouchableOpacity,
  View,
  FlatList,
  Image,
  TextInput,
  Alert,
  Button,
  KeyboardAvoidingView
} from 'react-native';
import results from '../../componentes/Results/results';
import { styles } from './styles';



export function Home(){

  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('../../../music/Callmeone.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); 
    }
  
    React.useEffect(() => {
      return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync(); }
        : undefined;
    }, [sound]);



const {secondary100, secondary80}=theme.colors;
  
const navigation = useNavigation();

const [products, setProducts] = useState(results);
const [visible, setVisible]= useState(false);
 

const [text, onChangeText] = React.useState("Search music");
console.log(text)

const toCart = ()=>{
    navigation.navigate('cart')
}




  return (
    <KeyboardAvoidingView style={styles.container}>
   <LinearGradient
   style={{ flex:1}}
   colors= {[secondary100, secondary80, secondary100]}>

          <View style={styles.header}>
           
               <View>
               <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                 />

                 <TouchableOpacity style={styles.iconsearch}>
                 <AntDesign name="search1" size={24} color="white" />
                 </TouchableOpacity>
               </View>


              
  
            
              
               
          </View>


         <View style={styles.recomendation}>
         <Text style={{ color:'white',fontWeight:'700',fontSize:20}}>Recente Played</Text>
         </View>
        

   <TextInput />



        <FlatList
       data={products}
       keyExtractor={(item) => item.id}
       horizontal
      showsHorizontalScrollIndicator={false}
       renderItem={({item}) => (

        <TouchableOpacity   activeOpacity={0.7} style={styles.areaprincipal}>



            <View style={styles.productbck}>

          
              <View style={{ marginHorizontal:5, alignItems:'center',justifyContent:'center'}}>
               
                <Image source={item.atwork}
                style={styles.imagens}/>
              </View>
               
             
             
            </View>
             <View style={{ padding:5,marginHorizontal:24, marginTop:10 }}>
                <Text style={{ color:'white',paddingVertical:2, fontWeight:'700',fontSize:15}}>{item.title}</Text>
                <Text style={{ color:'white'}}>{item.artist}</Text>
              </View>

            </TouchableOpacity>

       )} />





       <View style={styles.recomendation2}>
         <Text style={{ color:'white',paddingVertical:5,fontWeight:'700',fontSize:20}} >Recomendation</Text>
       </View>
 




       <FlatList
       data={products}
       keyExtractor={(item) => item.id}
      

       renderItem={({item}) => (
        <KeyboardAvoidingView>
        <TouchableOpacity 
          onPress={() => {setVisible(true)}}
        style={styles.areaprincipal2}>



            <View style={styles.productbck2}>

            <View >
               
               <Image 
               style={{ width:60, height:60, borderRadius:5}}
               source={item.atwork}
              />
             </View>
             
            </View>
             <View style={{ padding:5,marginHorizontal:24, marginTop:10 }}>
                <Text style={{ color:'white',fontWeight:'700',fontSize:15}}>{item.title}</Text>
                <Text style={{ color:'white'}}>{item.artist}</Text>
              </View>


              <View style={styles.icons}>
              <AntDesign name="hearto" size={24} color="white" />
              </View>

          </TouchableOpacity>
          </KeyboardAvoidingView>
       )} />
       

        
                 


       <Modal 

         swipeDirection='down'
         onSwipeComplete={() => setVisible(false)}
         onBackdropPress={() => setVisible(false)}
         isVisible={ visible}>

    <View style={{  height:700, backgroundColor:'white'}}>
    <LinearGradient
      style={{width:'100%', height:'100%'}}
      colors={[ secondary100, secondary80, secondary100]}
      >


     


              <View style={{ marginVertical:24}}>
                 <View style={styles.img}>
                 <AntDesign style={{ paddingVertical:26}} name="sound" size={24} color="white" />
                 <Image 
                  style={styles.img2}
                  source={Alok}/>
                  <AntDesign style={{ paddingVertical:26}} name="sound" size={24} color="white" />


                  <View style={styles.Txt}>
                     <Text style={{ color:'white', fontSize:20, fontWeight:'700'}}>Love Again- Alok</Text>
                      <Text style={{ color:'gray', fontSize:15,
                      paddingVertical:5}}>Love Again- Alok</Text>



<Slider
  style={{width: 340, height: 40}}
  minimumValue={0}
  maximumValue={311}
  minimumTrackTintColor="#FFFFFF"
  maximumTrackTintColor="#000000"
  onValueChange={(value)=>
  console.log(value)}
/>



             <View style={styles.time}>
               <View><Text style={{ color:'white', fontSize:15, paddingHorizontal:230}}>02:25</Text></View>
               <View><Text style={{ color:'white', fontSize:15 }}>03:51</Text></View>
              
             </View>


                        <View style={{ marginTop:0, flexDirection:'row', justifyContent:'space-between', alignItems:'center' }}>

                        <MaterialIcons name="replay" size={27} color="white" />

                         <TouchableOpacity 
                        
                         style={{ padding:20}}>
                         <Ionicons name="ios-play-back-outline" size={30} color="white" />
                         </TouchableOpacity>
                       


                        <TouchableOpacity 
                         onPress={playSound}
                         style={{ padding:20}}>

                        <AntDesign name="playcircleo" size={70} color="white"/>
                           </TouchableOpacity>
                         

                         <TouchableOpacity
                        
                         style={{ padding:20}}>
                           
                         <Ionicons name="play-forward-outline" size={30} color="white" />
                           </TouchableOpacity>


                           <Feather name="repeat" size={22} color="white" />


                         </View>
                  </View>
                  
                </View>
               
                

                
              </View>
               
             
             
         
    

      
              </LinearGradient>
    </View>



 
         </Modal>
  



       </LinearGradient>

    </KeyboardAvoidingView>
  );
}