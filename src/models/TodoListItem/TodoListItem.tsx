import styled from '@emotion/native'
import CheckBox from '@react-native-community/checkbox'
import React from 'react'
import { View, Text } from 'react-native'
import { TodoListProps } from '../../components/organisms/TodoList'
import ITodo from '../iTodo'

export interface TodoListItemProps{
    todo : ITodo;
}
 
const TodoListItem: React.FC<TodoListItemProps> = ({todo}) => {
    return (
        <Container>
            <CustomText> {todo.title}</CustomText>
            <CheckBox value={todo.completed}/>
        </Container>
    )
}

const Container =  styled.View`
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    align-items: center;
`;

const CustomText = styled.Text`
    width: 85%;
`;

export default TodoListItem
