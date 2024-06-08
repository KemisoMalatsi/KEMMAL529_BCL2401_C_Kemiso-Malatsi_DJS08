import React from "react"
import { Link, Outlet } from "react-router-dom"

export default function HostLayout() {
    return (
        <>
            <header />
            <Outlet />
        </>
    )
}