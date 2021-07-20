import React from 'react';
import { Logo } from '../../../shared/images';
import './header.scss';

const Header = () => {
    return (
        <header className="header container d-flex justify-content-between align-items-center">
            <Logo width={150} />
            <label className="menu d-block d-md-none">
                <input type="checkbox" />
                <div className="menu__hamburguer">
                    <span></span>
                </div>
                <ul className="menu__dropdown flex-column">
                    <li className="menu__dropdown--item fs-18 fw-400 color-default text-center py-2">Início</li>
                    <li className="menu__dropdown--item fs-18 fw-400 color-default text-center py-2">Sobre</li>
                    <li className="menu__dropdown--item fs-18 fw-400 color-default text-center py-2">Serviços</li>
                    <li className="menu__dropdown--item fs-18 fw-400 color-default text-center py-2">Blog</li>
                    <li className="menu__dropdown--item fs-18 fw-400 color-default text-center py-2">Contato</li>
                    <li className="menu__dropdown--item fs-18 fw-400 color-default text-center py-2">Ajuda</li>
                </ul>
            </label>
            <nav className="d-none d-md-block">
                <ul className="d-flex align-items-center">
                    <li className="fs-16 fw-400 color-default mx-3">Início</li>
                    <li className="fs-16 fw-400 color-default mx-3">Sobre</li>
                    <li className="fs-16 fw-400 color-default mx-3">Serviços</li>
                    <li className="fs-16 fw-400 color-default mx-3">Blog</li>
                    <li className="fs-16 fw-400 color-default mx-3">Contato</li>
                    <li className="fs-16 fw-400 color-default mx-3">Ajuda</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header