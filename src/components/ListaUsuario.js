import React, { useState, useEffect } from 'react'
import { View, Text, ActivityIndicator, FlatList} from 'react-native'
import Usuario from './Usuario';

const ListaUsuario = (users) => {
    // const[users , setUsers] = useState([]);
    

    // getUsers = async () =>{
    //     try {
    //       const resultado = await fetch('https://jsonplaceholder.typicode.com/users');
    
    //       const datos = await resultado.json();
    //       setUsers(datos);
    //       console.log(datos);
    //     } catch (error) {
    //       console.log(error)
    //     }
    // }

    // useEffect(() => {
    //     getUsers();
    // }, []);

    return (
        <View>
            {
                users.length > 0 ? 
                (
                    <FlatList data={users} 
                    renderItem={({item}) => <Usuario usuario ={item} /> } />
                ) : (
                    <>
                    <ActivityIndicator color="#000" />
                    <Text> Cargando... </Text>
                    </>
                )
            }
        </View>
    )
}

export default ListaUsuario;
