import React, { Component } from 'react';
import styles from './Footer.module.css'

class Footer extends Component {

    render() { 
        return ( 
            <footer className={styles.footerBar}>
                <p className={styles.footerP}>Resilia 2021 - Alguns direitos reservados</p>
            </footer>
        );
    }
}
 
export default Footer;