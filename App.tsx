/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
import Home from './src/components/screens/HomeScreen';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import * as reducers from './src/store/reducers'


const store = createStore(combineReducers(reducers));

 const App = () => {

   return (

    <Provider store ={store}>
           <SafeAreaView>
       <Home></Home>
     </SafeAreaView>
    </Provider>
     
   );
 };

 export default App;
