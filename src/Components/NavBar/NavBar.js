import React from 'react';
import ScrollToTop from '../wrapper';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavBarElements';
// import Bars from '../Bar/Bars';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to="*">
                    <img className='logo'src={require('../../assets/logo.jpg')}/>
                </NavLink>
                {/* <NavLink to="*">
                    <h1>Home</h1>
                </NavLink> */}
                <Bars onClick={toggle}/>
                <NavMenu>

                    <NavLink className='navlink' to='/services' activeStyle>
                        Services
                    </NavLink>

                    <NavLink className='navlink' to='/gallery' activeStyle>
                        Gallery
                    </NavLink>

                    <NavLink className='navlink' to='/contact' activeStyle>
                        Contact
                    </NavLink>

                    {/* <NavLink to='/estimate' activeStyle>
                        Estimate
                    </NavLink> */}

                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/estimate'>Free Estimate</NavBtnLink>
                </NavBtn>

                

            </Nav>
        </>
    )
}

export default Navbar;