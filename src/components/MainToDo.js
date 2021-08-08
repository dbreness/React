import React, { useState, useEffect } from 'react'
import { View, Text, ActivityIndicator, FlatList, Button, StyleSheet} from 'react-native'


const MainToDo = () => {
    const[users , setUsers] = useState([]);
    const[userToDo, setUserToDo] = useState([])
    const[userSelected , setUserSelected] = useState(false);
    
    const onNameSelected = id =>{
        setUserSelected(true);
        console.log(id);
        getToDo(id);
    };

    const goToUsers = () =>{
        console.log("AJA")
        setUserSelected(false);
    }

    getUsers = async () =>{
        try {
          const resultado = await fetch('https://jsonplaceholder.typicode.com/users');
    
          const datos = await resultado.json();
          setUsers(datos);
          console.log(datos);
        } catch (error) {
          console.log(error)
        }
    }

    getToDo = async (id) =>{
        try {
          const resultado = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`);
    
          const datos = await resultado.json();
          setUserToDo(datos);
          console.log(datos);
        } catch (error) {
          console.log(error)
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            {
                !userSelected ? 
                (
                    <FlatList data={users} 
                    renderItem={
                        ({item}) => 
                        <Text style = {styles.contenedor} onPress = {() => onNameSelected(item.id) } >{item.name}</Text>
                    } />
                ) : (
                    <>
                    <FlatList  data={userToDo} 
                    renderItem={
                        ({item}) => 
                        <Text style = {styles.contenedor}>{item.title}</Text>
                    } />
                    <Text  onPress = {() => goToUsers() }>ATRAS</Text>
                    </>
                )
            }
        </>
    )
}

const styles = StyleSheet.create({
    contenedor : {
        padding: 8,
    }
});

export default MainToDo
