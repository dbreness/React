import React, { useState } from 'react'
import { View, Text } from 'react-native'
import ITodo from '../../../models/iTodo'
import IUser from '../../../models/iUser'
import TodoDetail from '../../molecules/TodoDetails'
import UserDetails from '../../molecules/UserDetails'
import TodoList from '../../organisms/TodoList'
import UserList from '../../organisms/Userlist'

const Home:  React.FC = () => {
    
    const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

    return (
        <View>
            {
                selectedUser ? ( <UserDetails selectedUser={selectedUser} setSelectedUser={setSelectedUser} /> )
                : 
                (<UserList setSelectedUser={setSelectedUser} />)
            }
        </View>
    )
}

export default Home
