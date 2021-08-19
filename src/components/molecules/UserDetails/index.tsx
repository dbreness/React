import styled from '@emotion/native'
import React from 'react'
 import { View, Text, Button, FlatList } from 'react-native'
import IUser from '../../../models/iUser'
import TodoListItem from '../../../models/TodoListItem/TodoListItem'

 export interface UserDetailsProps{
     selectedUser : IUser;
     setSelectedUser : React.Dispatch<React.SetStateAction<IUser | null>>;
 }

 const UserDetails : React.FC<UserDetailsProps> = ({selectedUser, setSelectedUser}) => {

    const onBackPress = () =>{
        setSelectedUser(null);

    }


     return ( 
         <Container>
             <Text>{selectedUser.email}</Text>
             <Text>{selectedUser.phone}</Text>
             <FlatList data={selectedUser.todos}
             renderItem={({item}) => <TodoListItem todo={item}/> } />
             <Button title="Atras" onPress={onBackPress}/>
         </Container>
     )
 }

 const Container = styled.View`
 padding : 16px;
 `;
 
 export default UserDetails
 