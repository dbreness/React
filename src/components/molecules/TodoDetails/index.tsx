import CheckBox from '@react-native-community/checkbox'
import React from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native'
import ITodo from '../../../models/iTodo'

export interface TodoDetailProps {
    todo: ITodo;
    setSelectedItem: React.Dispatch<React.SetStateAction<ITodo | null>>;
}

const TodoDetail: React.FC<TodoDetailProps> = ({todo, setSelectedItem}) => {
    return (
        <View>
            <Text>{todo.userId}</Text>
            <Text>{todo.title}</Text>
            <Text>{todo.completed}</Text>
            <CheckBox value = {todo.completed}/>
            <Button title="Ir Atras" onPress={() => setSelectedItem(null)}/>
        </View>
    )
}

export default TodoDetail
