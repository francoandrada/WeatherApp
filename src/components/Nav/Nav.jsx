import React from 'react';
import Logo from './SearchBar/Logo';
import Searchbar from './SearchBar/SearchBar';
import style from './Nav.module.css'

function Nav({onSearch}) {
    return (
        <div className={style.container}>
            <Logo/>
            <Searchbar onSearch={onSearch}/>
        </div>
    );
};

export default Nav;