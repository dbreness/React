import React from 'react';
import{View,Text, Button, TextInput} from 'react-native'

export default class ComponenteClase extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            contadorClase : 0,
            nombre: ''
        };
    }

    componentDidMount(){
        this.obtenerAlbums();
    }

    obtenerAlbums = async () =>{
        try {
          const resultado = await fetch('https://jsonplaceholder.typicode.com/albums');
    
          const datos = await resultado.json(resultado);
          console.log(datos);
        } catch (error) {
          console.log(error)
        }
    };

    actualizarNombre(nombre){
        this.setState({nombre: nombre})
    }

    incrementarContador(){
        this.setState({contadorClase: this.state.contadorClase + 1})    }

    render(){
        return(
            <>
                <Text>Clase #{this.state.contadorClase}</Text>
                <TextInput placeholder="Ingrese su nombre" value={this.state.nombre} onChangeText={nuevoNombre => this.actualizarNombre(nuevoNombre)} />
                <Text>Hola soy {this.state.nombre}</Text>
                <Button title="OKClase" onPress = {() => this.incrementarContador()} />
            </>
        )
    }
}