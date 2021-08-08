import React from 'react'
import { View, Text } from 'react-native'
import styled from '@emotion/native'

const Boton1 = styled.TouchableOpacity`
    alignItems : center;
    border: solid 1px;
    background: #f1f1f1;
`;

const CustomButton = () => {
    return (
        <Boton1>
            <Text>OK</Text>
        </Boton1>
    )
};

export default CustomButton;
