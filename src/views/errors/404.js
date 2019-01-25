import React from 'react'
import { Link } from 'react-router-dom'

const NoFoundPage = () => (
    <div>
        <h2>404</h2>
        <p>Pagina no encontrada...!</p>
        <Link to="/">Go home</Link>
    </div>
)

export default NoFoundPage;