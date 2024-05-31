import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div>
        <nav className='bg-slate-500'>
    <ul className='flex justify-around'>
        <li className='hover:text-white'>
            <Link to="/flora-fauna" >
                
            Flora y fauna
            </Link>
        </li>
        <li className='hover:text-white'>
        <Link to="/ambiente" >
            Ambiente
            </Link>
        </li>
        <li className='hover:text-white'>
        <Link to="/ambiente" >
            otro
            </Link>
        </li>
    </ul>
</nav>
    </div>
  )
}
