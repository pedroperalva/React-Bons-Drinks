import React, { Component } from 'react';
import styles from './Home.module.css';

class Home extends Component {
    
    render() { 
        return ( 
            <div className={styles.div1}>
                <h1 className={styles.title}>Bons Drinks</h1>
            </div>
        );
    }
}
 
export default Home;