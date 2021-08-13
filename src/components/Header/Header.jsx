import React, { Component } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() { 
        return ( 
        <header className={styles.headerBar}>    
            <nav className={styles.headerNavBar}>
                <Link className={styles.headerNav}>Drinks</Link>
                <Link to="/sobrenos" className={styles.headerNav}>Sobre Nós</Link>
                <Link to="/" className={styles.headerTitle}>Bons Drinks</Link>
                <Link className={styles.headerNav}>Nosso Time</Link>
                <Link to="/contato" className={styles.headerNav}>Contato</Link>
            </nav>
        </header> );
    }
}
 
export default Header ;