import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { cart } from "../src/screens/cart/index";
import { catalago } from "../src/screens/catalago/index";
import { Cart2 } from "../src/screens/Cart2";


const Stack= createNativeStackNavigator();
function Routes() {
return(
    <NavigationContainer>
       <Stack.Navigator initialRouteName="catalago">
         

      




       <Stack.Screen name="Cart2" component={Cart2}
            options={{
              title: 'Cart2',
              headerShown: false,
            }}/>


       

       <Stack.Screen name="cart" component={cart}
            options={{
              title: 'cart',
              headerShown: false,
            }}/>

      
       
        <Stack.Screen name="catalago" component={catalago}
            options={{
              title: 'catalago',
              headerShown: false,
            }}/>


  
           
       </Stack.Navigator>
    </NavigationContainer>


);
}
export default Routes;