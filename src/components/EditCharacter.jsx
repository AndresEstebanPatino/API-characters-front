import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const url = 'http://localhost:8081/characters'

const EditCharacter = () => {

    const [nombre, setNombre] = useState("")
    const [imagen, setImagen] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const navigate = useNavigate()

    const {id} = useParams()  //el useParams captura variables o argumentos de las rutas

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${url}/${id}`, {
            name: nombre,
            img: imagen,
            description: descripcion
        })
        navigate("/")
    }
    useEffect( () => {
       const getCharactersById = async () => {

        const response = await axios.get(`${url}/${id}`)
        setNombre(response.data.name)
        setImagen(response.data.img)
        setDescripcion(response.data.description)
       }

       getCharactersById()
    }, [id])



  return (
    <div>
         <h3>Edit</h3>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'>nombre</label>
                <input 
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>imagen</label>
                <input 
                    type="text"
                    value={imagen}
                    onChange={(e) => setImagen(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>descripción</label>
                <textarea 
                    type="text"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />
            </div>
            <button type="submit">Modificar</button>
        </form>
    </div>
  )
}

export default EditCharacter