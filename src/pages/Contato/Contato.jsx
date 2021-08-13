import React, {Component} from 'react'
import styles from './Contato.module.css';
import Botao from '../../components/Botao/Botao';
import Input from '../../components/Input/Input';
import Inputext from '../../components/Inputext/Inputext';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import drinksIMG from '../../img/contact-pic.jpg'

class Contato extends Component {
    
    render() { 
        return (
            <div className={styles.grid}>
                <div className={styles.header}>
                    <Header/>
                </div>
                <div className={styles.content}>
                    <div className={styles.container}>
                        <h1 className={styles.title}>Contato</h1>
                        <img className= {styles.img} src={drinksIMG} alt="imgcontato"/>
                        <form className={styles.form}>
                        <Input>Nome:</Input>
                        <Input>E-mail:</Input>
                        <Inputext>Mensagem:</Inputext>
                        <Botao className={styles.botao}>Enviar</Botao>
                        </form> 
                    </div>
                </div>
                <div className={styles.footer}>
                <Footer/>
                </div>
            </div>
        );
    }
}
 
export default Contato;