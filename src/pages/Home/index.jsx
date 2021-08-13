import React, {Component} from 'react'
import styles from './HomePage.module.css'
import Home from '../../components/Home/Home';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

class HomePage extends Component {

    render(){
    return (
      <div className={styles.grid}>
        <div className={styles.header}>
          <Header/>
        </div>
        <div className={styles.content}>
          <Home/>
        </div>
        <div className={styles.footer}>
          <Footer/>
        </div>
      </div>
    )
    }
}

export default HomePage;