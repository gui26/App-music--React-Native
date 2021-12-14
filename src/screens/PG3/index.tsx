import React, { useState, useEffect, useMemo} from 'react';
import axios from 'axios';
import { Audio} from 'expo-av';
import { AntDesign } from '@expo/vector-icons';


import {
  FlatList,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  TouchableOpacityBase
} from 'react-native';
import { LinearGradient} from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import Slider from '@react-native-community/slider';


import results from '../../componentes/Results/results';

import { styles } from './styles';
import { theme } from '../../../global/themes';
import { useNavigation } from '@react-navigation/native';

export function PG3(){
  const navigation = useNavigation()

 

  

const {secondary100,secondary80}=theme.colors;
function Goback9(){
  navigation.goBack()
}


  
    return (
    <View style={styles.container}>
      <LinearGradient
      style={{width:'100%', height:'100%'}}
      colors={[ secondary100, secondary80, secondary100]}
      >

<View style={styles.header}>
            <TouchableOpacity
            onPress={Goback9}>
            <AntDesign name="left" size={24} color="white" />
            </TouchableOpacity>
               
               <View>
               <Text style={{ color:'white', fontWeight:'700',fontSize:20}}>Now PLAYING</Text>
               </View>

               <View>

               </View>
               
          </View>
     


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
  style={{width: 200, height: 40}}
  minimumValue={0}
  maximumValue={1}
  minimumTrackTintColor="#FFFFFF"
  maximumTrackTintColor="#000000"
/>


                        <View style={{ marginTop:60, flexDirection:'row', justifyContent:'space-between', alignItems:'center' }}>

                        <MaterialIcons name="replay" size={27} color="white" />

                         <View  style={{ padding:20}}>
                         <Ionicons name="ios-play-back-outline" size={30} color="white" />
                         </View>
                       


                        <TouchableOpacityBase 
                        
                        style={{ padding:20}}>
                        <AntDesign name="playcircleo" size={70} color="white"/>
                           </TouchableOpacityBase>
                         

                         <View  style={{ padding:20}}>
                           
                         <Ionicons name="play-forward-outline" size={30} color="white" />
                           </View>


                           <Feather name="repeat" size={22} color="white" />


                         </View>
                  </View>
                  
                </View>
               
                

                
              </View>
               
             
             
         
     



      
              </LinearGradient>
    </View>
  );
}