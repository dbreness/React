import React, {useState} from 'react';
import {Text, Button, TextInput} from 'react-native';

export const ComponenteFuncion = () => {
    const[contadorClase, setContadorClase] = useState(0);
    const[nombre, setNombre] = useState('');

    const onNameChange = pnombre =>{
        setNombre(pnombre);
    };

    return (
        <>
            <Text>Funcion # {contadorClase}</Text>
            <TextInput placeholder="Ingrese su nombre" value={nombre} onChangeText={onNameChange} />
            <Text>Hola soy {nombre}</Text>
            <Button title="OKfuncion" onPress = {() => setContadorClase(contadorClase + 1)} />
            
        </>
        )
};



export function ComponenteFuncion2() {
    return <Text>Soy otra función </Text>;
    

}