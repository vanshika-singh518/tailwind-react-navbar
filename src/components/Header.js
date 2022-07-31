import { MenuOutlined } from '@material-ui/icons';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';

const Header = () => {

    const [active,setActive] = useState(false)

    const showMenu = () => {
        setActive(!active)
    }

  return (
    <div className='fixed w-full text-white flex justify-between p-4 items-center bg-black '>

        <div className='text-2xl font-bold text-center uppercase'>
            <h1> SRM <span className='block text-4xl'>ICIoT'23</span></h1>
        </div> 

        <nav>

            <div className='absolute right-6 md:hidden top-6 scale-150'>
                <MenuOutlined onClick={showMenu} className='scale-150 cursor-pointer'/>
            </div>
                <ul className='hidden md:flex gap-8 p-6 uppercase'>
                    <li className="text-gray-300 hover:bg-gray-700 hover:text-white active:text-white px-4 py-2 rounded-md font-medium">
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

                <MenuItems showMenu={showMenu} active={active}/>

        </nav>

    </div>
  );
};

export default Header;