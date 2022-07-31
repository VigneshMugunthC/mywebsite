import React, { Component } from 'react';
import { MenuItems } from './MenuItems'
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Button from 'react-bootstrap/Button';

class Navbar extends Component{
    state = { active: false }

    handelClick = () => {
        this.setState({active: !this.state.active})
    }

    handelcart = () => {
        const navigate = useNavigate();
        navigate('/login');
    }

    render(){
        return(
            <nav className='NavbarItems'>
                <Link className='navbar-logo' to='/'>Restarunt Recipe</Link>
                <div className='menu-icon' onClick={this.handelClick}>
                    <i className={this.state.active?'fas fa-times':'fas fa-bars'}></i>               
                </div>
                <ul className={this.state.active?'nav-menu active':'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <Link to='/cart' className='btn btn-dark'>Cart</Link>
                {/*<Link to='/cart' className='btn btn-dark'>Cart</Link>
                <Button onClick={this.handelcart} variant='dark'>Cart</Button>*/}
            </nav>
        );
    }
}
export default Navbar

/*export default function Navbar(){
    return(
    <nav className="nav">
        <a href="/" className="site-title">Restarunt Recipe</a>
        <ul>
            <li>
                <a href="/"></a>
            </li>
            <li>
                <a href="/"></a>
            </li>
            <li>
                <a href="/"></a>
            </li>
            <li>
                <a href="/"></a>
            </li>
        </ul>
    </nav>
    ) 
}*/