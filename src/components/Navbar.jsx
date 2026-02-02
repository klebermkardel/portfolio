import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    return (
        <header>
            <nav className='navBar' aria-label='Navegação Principal'>
                <div className="logo">
                    <a href="/" className="logoName">&lt; /Kleber M Kardel &gt;</a>
                </div>

                <div className="menu">
                    <ul className="menuList">
                        <li className="itemMenu"><a href="#inicio">Início</a></li>
                        <li className="itemMenu"><a href="#sobre">Sobre</a></li>
                        <li className="itemMenu"><a href="#habilidades">Habilidades</a></li>
                        <li className="itemMenu"><a href="#projetos">Projetos</a></li>
                        <li className="itemMenu"><a href="#contato">Contato</a></li>
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