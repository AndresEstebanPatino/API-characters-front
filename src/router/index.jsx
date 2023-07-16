import { createBrowserRouter }  from "react-router-dom"
import Home from '../pages/Home'
import ShowCharacters from "../components/ShowCharacters"
import CreateCharacter from "../components/CreateCharacter"
import EditCharacter from "../components/EditCharacter"
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/characters",
        element: <ShowCharacters/>
    },
    {
        path: "/create",
        element: <CreateCharacter/>
    },
    {
        path: "/edit/:id",
        element: <EditCharacter/>
    },
])