import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Importe estes dois

const Navbar = () => {
    const [active, setActive] = useState(false);

    const toggleMenu = () => {
        setActive(!active);
    };

    return (
        <header className="header">
            <nav className='navBar' aria-label='Navegação Principal'>
                <div className="logo">
                    <a href="/" className="logoName">&lt; /Kleber M Kardel &gt;</a>
                </div>

                {/* Ícone Hambúrguer */}
                <div className={`mobile-menu-icon ${active ? 'active' : ''}`} onClick={toggleMenu}>
                    <FontAwesomeIcon icon={active ? faTimes : faBars} />
                </div>

                {/* Menu com classe condicional */}
                <div className={`menu ${active ? 'active' : ''}`}>
                    <ul className="menuList">
                        <li className="itemMenu"><a href="#inicio" onClick={toggleMenu}>Início</a></li>
                        <li className="itemMenu"><a href="#sobre" onClick={toggleMenu}>Sobre</a></li>
                        <li className="itemMenu"><a href="#habilidades" onClick={toggleMenu}>Habilidades</a></li>
                        <li className="itemMenu"><a href="#projetos" onClick={toggleMenu}>Projetos</a></li>
                        <li className="itemMenu"><a href="#contato" onClick={toggleMenu}>Contato</a></li>
                    </ul>
                </div>

                <aside className="socialMedias">
                    <ul className="socialMediasList">
                        <li className="itemSocialMedia">
                            <a href="https://linkedin.com/in/klebermkardel" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li>
                        <li className="itemSocialMedia">
                            <a href="https://github.com/klebermkardel" target="_blank" rel="noreferrer" aria-label="GitHub">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                    </ul>
                </aside>
            </nav>
        </header>
    );
};

export default Navbar;