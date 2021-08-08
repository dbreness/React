import React, { Component } from 'react'
import { ActivityIndicator, FlatList, StatusBar, Text, View } from 'react-native'

export default class ListaAlbumsClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            albums: [],
        };
    }

    obtenerAlbums = async () =>{
        try {
          const resultado = await fetch('https://jsonplaceholder.typicode.com/albums');
    
          const datos = await resultado.json();
          this.setState({albums:datos});
          console.log(datos);
        } catch (error) {
          console.log(error)
        }
      };

    componentDidMount(){
        this.obtenerAlbums();
    }

    render() {
        return (
            <View>
                {
                    this.state.albums.length > 0 ? 
                    (
                        <FlatList data={this.state.albums} 
                        renderItem={({item}) => <Text>{item.title}</Text> } />
                    ) : (
                        <>
                        <ActivityIndicator color="#000" />
                        <Text> Cargando... </Text>
                        </>
                    )
                }
            </View>
        )
    }
}