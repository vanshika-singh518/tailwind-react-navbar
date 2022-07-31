import { Close } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const MenuItems = ({showMenu,active}) => {
  return (
                <ul className={active ? 'flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-black backdrop-blur-lg gap-8 justify-center p-8 md:hidden' : 'hidden'}>
                    <Close onClick={showMenu} className='cursor-pointer'/>
                    <li className="text-gray-300 hover:bg-gray-700 hover:text-white hover:display-block px-3 py-2 rounded-md text-base font-medium">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="text-gray-300 hover:bg-gray-700 hover:text-white active:text-white px-4 py-2 rounded-md font-medium">
                        <Link to='/'>Conferences</Link>
                    </li>
                    <li className="text-gray-300 hover:bg-gray-700 hover:text-white active:text-white px-4 py-2 rounded-md font-medium">
                        <Link to='/'>Speakers</Link>
                    </li>
                    <li className="text-gray-300 hover:bg-gray-700 hover:text-white active:text-white px-4 py-2 rounded-md font-medium">
                        <Link to='/'>Gallery</Link>
                    </li>
                    <li className="text-gray-300 hover:bg-gray-700 hover:text-white active:text-white px-4 py-2 rounded-md font-medium">
                        <Link to='/'>Register</Link>
                    </li>
                    <li className="text-gray-300 hover:bg-gray-700 hover:text-white active:text-white px-4 py-2 rounded-md font-medium">
                        <Link to='/'>Login</Link>
                    </li>
                </ul>
  );
};

export default MenuItems;