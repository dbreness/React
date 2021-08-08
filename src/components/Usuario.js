import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import MainToDo from './MainToDo';

const Usuario = ({usuario}) => {
    return (
        <View style={styles.contenedor}>
            <Text onPress = {() => console.log(usuario.title) } >{usuario.title}</Text>
            {/* <Button title="ToDo" onPress = {() => console.log(usuario.name)} /> */}
        </View>
    )
};

const styles = StyleSheet.create({
    contenedor : {
        padding: 4,
    }
});

export default Usuario;
