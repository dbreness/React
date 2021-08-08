import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Button } from 'react-native'
import Album from './Album';
import CustomButton from './CustomButton';

const ListaAlbums = () => {

    const[albums , setAlbums] = useState([]);

    obtenerAlbums = async () =>{
        try {
          const resultado = await fetch('https://jsonplaceholder.typicode.com/albums');
    
          const datos = await resultado.json();
          setAlbums(datos);
          console.log(datos);
        } catch (error) {
          console.log(error)
        }
    }


    useEffect(() => {
         obtenerAlbums();
    }, []);

    return (
        <View style={styles.contenedor}>
            <CustomButton/>
                {
                    albums.length > 0 ? 
                    (
                        <FlatList data={albums} 
                        renderItem={({item}) => <Album item ={item} /> } />
                    ) : (
                        <>
                        <ActivityIndicator color="#000" />
                        <Text> Cargando... </Text>
                        </>
                    )
                }
            </View>
    )
};

const styles = StyleSheet.create({
    contenedor : {
        padding: 8,
    }
});

export default ListaAlbums;
