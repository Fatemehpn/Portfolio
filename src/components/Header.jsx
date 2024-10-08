import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
    <li>

      <Link to='/'>
      Home
      </Link>
    </li>
    <li>

      <Link to='/work'>
      Work
      </Link>
    </li>
      </nav>
    </div>
  )
}

export default Header