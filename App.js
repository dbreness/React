
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ListaAlbums from './src/components/ListaAlbums';
import ListaAlbumsClass from './src/components/ListaAlbumsClass';
import MainToDo from './src/components/MainToDo';

const App = () => {
  useEffect(async () =>{ await obtenerAlbums();}, []);

  return (
    <SafeAreaView> 
      {/* <ListaAlbumsClass/> */}
      
      <MainToDo></MainToDo> 
    </SafeAreaView>
  );
};

export default App;
