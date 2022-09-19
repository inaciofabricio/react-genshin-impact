import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/image/logo.png';

import personagens from '../assets/image/menu/personagens.png';
import armas from '../assets/image/menu/armas.png';
import artefatos from '../assets/image/menu/artefatos.png';
import alimentos from '../assets/image/menu/alimentos.png';
import materiais from '../assets/image/menu/materiais.png';
import nacoes from '../assets/image/menu/nacoes.png';

const Header = () => { 

  return(
    <header>
      <div>
        <Link to="/">
          <img src={logo}  alt="Logo da aplicação" />
        </Link>
      </div>
      <div className="menu">
        <div className="menu__item">
          <Link to="/" >
            <img className="menu__item___img" src={personagens} alt="Ícone personagens"></img>
            <span className="menu__item___titulo">Personagens</span>
          </Link>
        </div>
        <div className="menu__item">
          <Link to="/armas" >
            <img className="menu__item___img" src={armas} alt="Ícone armas"></img>
            <span className="menu__item___titulo">Armas</span>
          </Link>
        </div>
        <div className="menu__item">
          <Link to="/artefatos" >
            <img className="menu__item___img" src={artefatos} alt="Ícone artefatos"></img>
            <span className="menu__item___titulo">Artefatos</span>
          </Link>
        </div>
        <div className="menu__item">
          <Link to="/alimentos" >
            <img className="menu__item___img" src={alimentos} alt="Ícone alimentos"></img>
            <span className="menu__item___titulo">Alimentos</span>
          </Link>
        </div>
        <div className="menu__item">
          <Link to="/materiais" >
            <img className="menu__item___img" src={materiais} alt="Ícone materiais"></img>
            <span className="menu__item___titulo">Materiais</span>
          </Link>
        </div>
        <div className="menu__item">
          <Link to="/nacoes" >
            <img className="menu__item___img" src={nacoes} alt="Ícone Nações"></img>
            <span className="menu__item___titulo">Nações</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header;