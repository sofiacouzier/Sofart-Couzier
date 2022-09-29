import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../componentes/NavBar/NavBar'
import { AppContext } from './Provider'

export const Layout = () => {

    return (
        <div>
            <NavBar />
            <Outlet />

        </div>
    )
}
