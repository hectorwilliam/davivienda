import React, {useEffect} from 'react';
import Home from './Components/Home';
import Login from './Components/Login';
import Card from "./Components/Card"
import SingleProduct from './Components/SingleProduct';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const App =  () => {
  return (
    
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={ "Login"}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Producto" component={SingleProduct} />
          <Stack.Screen name="Carrito" component={Card} />

          
        </Stack.Navigator>
      </NavigationContainer>
  
  );
};

export default App;
