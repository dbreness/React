import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Album = ({item}) => {
    return (
        <View style={styles.contenedor}>
            <Text> Usuario: {item.userId}</Text>
            <Text style={styles.label}>{item.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    contenedor : {
        display : 'flex',
        paddingVertical: 14,
    },
    label : {
        color: 'red',
    },
});

export default Album;
