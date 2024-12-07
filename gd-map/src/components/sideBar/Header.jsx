import React from 'react';
import style from '../../styles/Header.module.css';

const Header = () => {
    return (
        <div className={style.header}>
            <h3 className={style.headerTitle}>Карта добрых дел</h3>
            <p className={style.headerDescription}>Владивосток</p>
        </div>
    );
};

export default Header;