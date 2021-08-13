import React, {Component} from 'react'
import styles from './App.module.css';
import HomePage from './pages/Home/index';
import SobreNos from './pages/SobreNos/SobreNos';
import Contato from './pages/Contato/Contato';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {

  render(){
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/sobrenos" component={SobreNos}/>
        <Route exact path="/contato" component={Contato}/>
      </Switch>
    </Router>
  )
  }
}

export default App;

/* <div className={styles.div2}>
      <p>Teste de fonte</p>
    </div>
    <div className={styles.div3}>
      <p>3</p>
    </div>
    <div className={styles.div4}>
      <p>4</p>
    </div>
    <div className={styles.div5}>
      <p>5</p>
    </div>
    <div className={styles.div6}>
      <p>6</p>
    </div>
    <div className={styles.div7}>
      <p>7</p>
    </div>
    <div className={styles.div8}>
      <p>8</p>
    </div>
    <div className={styles.div9}>
      <p>9</p>
    </div>
    <div className={styles.div10}>
      <p>10</p>
    </div> */