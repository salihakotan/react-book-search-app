import { Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <Heading as="h1">Book Search App</Heading>


        <nav>
            <ul className='headerMenu'>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </nav>

    </div>
  )
}

export default Header