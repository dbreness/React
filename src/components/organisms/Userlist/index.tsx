import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import ITodo from '../../../models/iTodo';
import IUser from '../../../models/iUser';
import UserListItem from '../../../models/UserListItem';
import {useSelector} from 'react-redux'
import { IState } from '../../../models/IState';

export interface UserListProps {
    setSelectedUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

const UserList: React.FC<UserListProps> = ({setSelectedUser}) => {
    const [users, setUsers] = useState<IUser[]>([])

    const pruebaRedux = useSelector((state: IState) => state.Users );

    const getUsers = async() => {
        try {
            const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');

            const todosResponse = await axios.get('https://jsonplaceholder.typicode.com/todos');

            const users = (usersResponse.data as IUser[]).map(user => ({
                ...user,
                todos: (todosResponse.data as ITodo[]).filter(todo =>  todo.userId === user.id)
            }))

            
            setUsers(users)
            console.log(users)
          } catch (error) {
            console.log(error)
          }
    };

    const onClickTodo = (user : IUser) =>{
        console.log(user);
    }
    
    useEffect(() => {
        getUsers();
    }, []);
    
    return (
        <View>
            
            {users.length > 0 ? 
            <FlatList data={users}
            renderItem={({item, index}) => (<UserListItem user={item} index={index} setSelectedUser={setSelectedUser}/>
            )}
            />: <ActivityIndicator color="#000"/> }
        </View>
    )
};

export default UserList

