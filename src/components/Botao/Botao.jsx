import React, { Component } from 'react';
import styles from './Botao.module.css'

class Botao extends Component{

    constructor(props){
        super(props)

        this.state = {
            disabled:false
        }
    }

    onClick = ()=>{
        console.log('fui clicado')
        this.setState({disabled:true})
        setTimeout(()=>{
            this.setState({disabled:false})
        },3000)
            
       
    }
    render(){
        return(
            <div className={styles.buttondiv}>
            <button type="submit" disabled={this.state.disabled} className={styles.button} onClick={this.onClick}>
                {this.props.children}
            </button>
            </div>
        )
    }
}

export default Botao;