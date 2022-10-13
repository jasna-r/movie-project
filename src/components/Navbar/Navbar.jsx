import React from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';


export const Navbar = () => {
  return (
    <header>
    <div className='container'>
        <div className='inner-content'>
            <div className='brand'>
                <Link to="/">&#127916;Movie Database</Link>
                </div>

                <ul className='nav-links'>
                    <li>
                        <Link to="/"> Watch List</Link>
                    </li>
                    <li>
                        <Link to="/watched"> Watched</Link>
                    </li>
                    <li>
                        <Link to="/add" className='btn'>+ Add</Link>
                    </li>
                </ul>

        </div>

    </div>
</header>
  )
}