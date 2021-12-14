import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { cart } from "../src/screens/cart/index";
import { catalago, Home } from "../src/screens/Home/index";
import { Cart2 } from "../src/screens/Cart2";
import { Home } from "../src/screens/Home/index";

const Stack= createNativeStackNavigator();
function Routes() {
return(
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
         

      




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

      
       
        <Stack.Screen name="Home" component={Home}
            options={{
              title: 'Home',
              headerShown: false,
            }}/>


  
           
       </Stack.Navigator>
    </NavigationContainer>


);
}
export default Routes;