// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import CategoryScreen from './screens/CategoryScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen 
          name="Categories" 
          component={CategoryScreen} 
          options={{ headerLeft: null }} // This removes the back button
        />
        <Stack.Screen name="ProductList" component={ProductListScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
