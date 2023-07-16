import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import './style.css'
const url = 'http://localhost:8080/characters'
const ShowCharacters = () => {
    const [characters, setCharacters] = useState([])
    
    useEffect( () => {
        getAllCharacters()
    }, [])


    const getAllCharacters = async () => {
        const response = await axios.get(url)
        let data = response.data
        setCharacters(data)
        console.log(data)
    }

    const deleteCharacters = async (id) => {
        await axios.delete(`${url}/${id}`)
        getAllCharacters()
    }


  return (
    <div className="contenedor">
        <div>
            <NavLink to="/create"><button className="btn btn-primary">Create</button></NavLink>

        </div>
        {
            characters.map(character => (
                <div key={character.id} className="card">
                    <h2 >{character.name}</h2>
                    <p>{character.description}</p>
                    <NavLink to={`/edit/${character.id}`}><button>editar</button></NavLink>
                    <button onClick={() => deleteCharacters(character.id)}>Eliminar</button>
                </div>
            ))
        }

    </div>
  )
}

export default ShowCharacters