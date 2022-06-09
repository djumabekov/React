import { Link } from "react-router-dom"
import React from 'react';

export const Footer = () => {
    return (
      <footer>
        <div className='text-center p-3 bg-dark' style={{color: "white", marginTop: "30px"}}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <Link className='text-white' to='/'>
        localhost:3000
        </Link>
      </div>
      </footer>
      )
}