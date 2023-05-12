import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './../assets/hplogo.png'
import '../style/Header.scss'
import 'boxicons'

export default function Header({menu}) {
    return (
        <div className='navbar'>

            <div className='logo'>
                <img src={Logo} />
            </div>
            <div className='menu'>
                {menu.filter(e => e.menubar === true).map(element => <Link key={element.path} to={element.path}>
                    {element.icon && <><box-icon name={element.icon} color='white'></box-icon><br /></>}
                    {element.name}
                </Link>)}
                <button><box-icon name='menu-alt-right' color='grey' size='lg'></box-icon></button>
            </div>


        </div>
    )
}