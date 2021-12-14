import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    
backgroundColor: '#120F30',

  },
  button:{
      backgroundColor:'red',
      
      
  },
  areaprincipal:{
    flex:1,
    paddingHorizontal:2,
    
    marginBottom:100
    
  },
  productbck:{
    backgroundColor:'red',
    width:170,
    height:160,
    paddingHorizontal:24,
    marginLeft:24,
    
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,
    
  },
  header: {
    
    paddingHorizontal:24,
  marginTop: getStatusBarHeight() + 26,
    marginBottom: 42,
 },
 recomendation:{
   paddingHorizontal:24,
  marginTop:-25
   
  
   
 },
 recomendation2:{
  paddingHorizontal:24,
  
  marginBottom:10,
  marginTop:-20
  
 
  
},
 areaprincipal2:{
  
  paddingHorizontal:2,
  flexDirection:'row',
  alignItems:'center',


  
},
productbck2:{
  backgroundColor:'red',
  width:60,
  height:60,
  paddingHorizontal:24,
  marginLeft:24,
  marginTop:24,
  
  alignItems:'center',
  justifyContent:'center',
  borderRadius:10,
  
},
icons:{
  position:'absolute',
  marginLeft:340
},

input: {
  backgroundColor:'#140f44',
  height: 50,
  width:'100%',
  margin: 12,
  
  padding: 10,
  borderRadius:10,
  color:"white",
  paddingHorizontal:10,
  marginLeft:0
},
iconsearch:{
  position:'absolute',
  marginLeft:300,
  marginTop:25
},
imagens:{
  width:170,
  height:170,
  borderRadius:10,
  
},
img:{
  
   alignItems:'center',
   
  },
  
  
  img2:{
    width:250,
    height:250,
    borderRadius:135,
    
  },
  
  Txt:{
    marginTop:15,
    alignItems:'center'
  },
  time:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginLeft:-230
  }

});