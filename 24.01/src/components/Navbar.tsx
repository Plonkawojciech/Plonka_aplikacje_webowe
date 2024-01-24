import React from 'react'

const Navbar = () => {
  return (
    <nav className='p-4'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center flex-shrink-0 text-white mr-6'>
          <span className='font-semibold text-xl'>Wojciech Płonka</span>
        </div>
        <div className='flex'>
          <a
            href='/'
            className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
          >
            Home
          </a>
          <a
            href='/contact'
            className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
          >
            Contact
          </a>
          <a
            href='/about'
            className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
          >
            About
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
