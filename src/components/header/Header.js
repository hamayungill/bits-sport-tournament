import React from 'react'
import logo from '../../images/logo.png'
import './header.css'
import { connectToWallet } from '../../utils/web3'

const Header = () => {
    return (
        <section id='header'>
            <nav className="navbar navbar-expand-lg text-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} className='img-fluid' alt='Logo'/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <span className="navbar-text">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">FAQ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">How to Play</a>
                            </li>
                            <button className='btn btn-primary connect-wallet-btn' onClick={()=> {connectToWallet()}}>Connect Wallet</button>
                        </ul>
                        
                        </span>
                    </div>
                </div>
            </nav>

        </section>
    )
}

export default Header