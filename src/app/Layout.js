import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../componentes/NavBar/NavBar'

export const Layout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />

        </div>
    )
}
