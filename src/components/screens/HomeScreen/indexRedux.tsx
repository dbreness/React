import React, { useState } from 'react'
import { View, Text } from 'react-native'
import UserList from '../../organisms/Userlist'
import UserListRedux from '../../organisms/Userlist/indexRedux'

const HomeRedux:  React.FC = () => {

    return (
        <View>
            <UserListRedux />
        </View>
    )
}

export default HomeRedux
