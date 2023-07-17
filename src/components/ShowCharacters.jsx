import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import './style.css'
const url = 'http://localhost:8081/characters'
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



  return (
    <div className="contenedor">
        <div>
            <NavLink to="/create"><button className="btn btn-primary">Create</button></NavLink>

        </div>
        {
            characters.map(character => (
                <div key={character.id} className="card">
                    <img src={character.img} alt="" className="img"/>
                    <h2 >{character.name}</h2>
                    <p>{character.description}</p>

                    <NavLink to={`/edit/${character.id}`}><button>editar</button></NavLink>

                </div>
            ))
        }

    </div>
  )
}

export default ShowCharacters