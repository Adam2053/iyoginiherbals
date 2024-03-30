import React from 'react'
import logo from '/assets/logo.png'
const Navbar = () => {

    const nav_items = ['Hair Oil', 'Shampoo', 'Contact Us']
  return (
    <nav className='navbar-container flex items-center justify-around px-5'>
        <img src={logo} alt="" />
        <ul className='flex gap-4'>
            {nav_items.map(item => (
                <li key={item}>
                    <a className='text-lg text-[#000000] font-bold hover:text-gray-300' href='#'>{item}</a>
                </li>
            ))}
        </ul>
        <button style={{transition:"all 0.2s ease-in"}} className="p-2 rounded-lg font-bold hover:bg-lime-400 text-lg bg-[#67A412] text-white">
            WhatsApp
        </button>
    </nav>
  )
}

export default Navbar