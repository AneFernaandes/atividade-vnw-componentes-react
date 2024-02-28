import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.jpg'


function Header() {
    return (

        <header>
            <nav>
                <img src={Logo} alt="logo vai na web" />

                <h2 class='titulo'>Atividade Vai na Web</h2>

                <ul>
                    <a href='#home'>Componentes</a>
                    <a href='https://vainaweb.com.br/'>Saiba Mais</a>
                </ul>
            </nav>

        </header>
        )
}

export default Header


