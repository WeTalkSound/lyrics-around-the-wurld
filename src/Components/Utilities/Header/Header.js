import React from 'react'
import { Link } from "react-router-dom";
import logo from './header-logo.jpg'

export default function Header() {
  return (
    <div className="firstcon text-center justify-content-center">
      <Link to="/">
        <img src={ logo } alt="Bolt Protect" style={{ height: "200px", borderRadius: "50%" }} className="headerlogo mx-auto d-flex img-fluid rotating" />
      </Link>
    </div>
  )
}