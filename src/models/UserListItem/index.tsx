import styled from '@emotion/native'
import React, { FC } from 'react'
import { View, Text } from 'react-native'
import IUser from '../iUser'

export interface UserListItemProps {
    user : IUser;
    index : number;
    setSelectedUser : React.Dispatch<React.SetStateAction<IUser | null>>;
}

const UserListItem: FC<UserListItemProps> = ({user, index, setSelectedUser}) => {

    const onPress = () =>{
        setSelectedUser(user)
    }

    return (
        <ItemContainer onPress={onPress}>
            <Text> {++index}. {user.name}</Text>
        </ItemContainer>
    )
}

const ItemContainer = styled.TouchableOpacity`
    background-color : #c1c1c1;
    border-radius 30px; 
    padding : 8px;
    margin : 6px  
`;

export default UserListItem
