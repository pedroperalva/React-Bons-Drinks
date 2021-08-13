import React, { Component } from 'react';
import styles from './Input.module.css'

class Input extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:""
        };
    }
    handleValue= (e)=>{
        console.log(e.target.value)
        this.setState({value:e.target.value})
    }
    render() { 
        return (
            <div className={styles.container}> 
                <label className={styles.label}>{this.props.children}</label>
                <input onChange={this.handleValue} className={styles.input} type="text"/>
            </div>
        );
    }
}
 
export default Input;