import React, { Component } from 'react';
import styles from './Inputext.module.css'

class Inputext extends Component {
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
                <textarea onChange={this.handleValue} className={styles.input} type="text"/>
            </div>
        );
    }
}
 
export default Inputext;