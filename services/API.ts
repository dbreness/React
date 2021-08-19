import axios from 'axios';

export default async function obtenerAlbums(){
    try {
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos');
      
      return(data);
    } catch (error) {
      console.log(error)
    }
}