import { createBrowserRouter } from "react-router-dom"

import App from "./App"
import { ListaViagens } from "./componentes/ListaViagens"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/viagens",
        element: <ListaViagens />
    }
])

export default router