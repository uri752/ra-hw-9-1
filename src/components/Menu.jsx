import React from 'react'
import { NavLink } from 'react-router-dom';
import './../css/index.css';

function getClassName(state) {
    return 'menu__item' + (state.isActive ? ' menu__item-active': '');
}

export default function Menu() {
  return (
    <nav>
        <ul className='menu'>
            <li className='menu__item'>
                <NavLink className={getClassName} to='/'> Главная </NavLink>
            </li>
            <li className='menu__item'>
                <NavLink className={getClassName} to='/drift'> Дрифт-такси </NavLink>
            </li>
            <li className='menu__item'>
                <NavLink className={getClassName} to='/timeattack'> Time attack </NavLink>
            </li>
            <li className='menu__item'>
                <NavLink className={getClassName} to='/forza'> Forza karting </NavLink>
            </li>

        </ul>

    </nav>
  )
}
