import React, { Component } from 'react'
import Logo from '../../images/logo.svg';
import {FaCartArrowDown} from 'react-icons/fa';
import AniLink from "gatsby-plugin-transition-link/AniLink"


export default class Navbar extends Component {
    state={
        navbarOpen:false,
        css:'collapse navbar-collapse',
        links:[
                {
                    id:1,
                    path:'/',
                    text:'Home'
                },
                {
                    id:2,
                    path:'/about',
                    text:'About'
                }
        ]
    }
    
    navBarHandler=()=>{
        this.state.navbarOpen?this.setState({
            navbarOpen:false, 
            css:"collapse navbar-collapse"
        }):this.setState({
            navbarOpen:true,
            css:'collapse navbar-collapse show'
        })

    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                {/* <Link to="/" className="navbar-brand">
                    
                </Link> */}
                <AniLink cover  to="/" bg="#ff9e09" className="navbar-brand">
                    <img src={Logo} alt=""/>
                </AniLink>
                <button className="navbar-toggler" type="button" onClick={this.navBarHandler}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={this.state.css}>
                        <ul className="navbar-nav mx-auto">
                            {this.state.links.map(link=>(
                                <li key={link.id} className="nav-item">
                                    <AniLink  paintDrip hex="#ff9e09" duration={0.5} to={link.path} alt="" className="nav-link text-capitalize">
                                        {link.text}
                                    </AniLink>
                                </li>
                            ))}
                            <li className="nav-item ml-sm-5">
                                <FaCartArrowDown className="cart-icon snipcart-checkout"/>
                            </li>
                        </ul>
                    </div>
            </nav>
        )
    }
}
