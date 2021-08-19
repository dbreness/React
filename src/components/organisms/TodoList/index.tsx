import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import axios from 'axios';
import ITodo from '../../../models/iTodo';

export interface TodoListProps{
    setSelectedItem: React.Dispatch<React.SetStateAction<ITodo | null>>;
}

const TodoList: React.FC<TodoListProps> = ({setSelectedItem}) => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const obtenerAlbums = async () =>{
        try {
          const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos');
          
          setTodos(data);
        } catch (error) {
          console.log(error)
        }
    };

    const onClickTodo = (todo: ITodo) =>{
        setSelectedItem(todo);
    };

    useEffect(() => {
        obtenerAlbums()
    }, []);

    return (
        <View>
            {todos.length > 0 ? <FlatList data={todos}
            renderItem={({item}) => (
            <TouchableOpacity onPress={() => onClickTodo(item)}>
                <Text>{item.title}</Text>
            </TouchableOpacity>
            )}
            />: <ActivityIndicator/> }
        </View>
    );
};

export default TodoList
