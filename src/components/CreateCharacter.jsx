import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const url = 'http://localhost:8080/characters'

const CreateCharacter = () => {
    
    const [nombre, setNombre] = useState("")
    const [imagen, setImagen] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault();
        await axios.post(url, {name: nombre, img: imagen, description : descripcion})
        navigate("/")
    }   

  return (
    <div>
        <h3>Create</h3>
        <form onSubmit={store}>
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
            <button type="submit">Guardar</button>
        </form>
    </div>
  )
}

export default CreateCharacter;