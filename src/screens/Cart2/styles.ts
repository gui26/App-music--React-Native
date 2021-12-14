import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
       
        backgroundColor: '#232323'
      },
     
      
      header: {
        width: '100%',
        flex:1,
        paddingHorizontal:24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getStatusBarHeight() + 26,
        marginBottom: 42,
        position:'absolute'
       
      
    },
    
    img:{
    marginTop:100,
     alignItems:'center',
     
    },
    
    
    img2:{
      width:265,
      height:265,
      borderRadius:135,
      
    },
    
    Txt:{
      marginTop:15,
      alignItems:'center'
    },
    
    
    });