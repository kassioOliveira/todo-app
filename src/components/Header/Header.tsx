import React from 'react'

import styles from './Header.module.css';

import todoLogo from '../../assets/Logo.svg'

const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.img} src={todoLogo} />
        </header>
    )
}

export default Header