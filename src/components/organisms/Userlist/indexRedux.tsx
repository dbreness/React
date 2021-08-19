import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import ITodo from '../../../models/iTodo';
import IUser from '../../../models/iUser';
import UserListItem from '../../../models/UserListItem';
import {useSelector} from 'react-redux'
import { IState } from '../../../models/IState';

const UserListRedux: React.FC= () => {

    const users = useSelector((state: IState) => state.Users.users );
    



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

export default UserListRedux

