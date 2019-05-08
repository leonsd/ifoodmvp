import React from 'react';

import { Navbar, Container } from 'rbx';
import LogoImage from 'assets/images/logo-v1-horizontal.png';
import SearchBox from 'components/search_box';

import 'styles/header.scss';

const Header = () => (
    <div className="top-navbar">
        <Container>
            <Navbar>
                <Navbar.Brand>
                    <img src={LogoImage} alt="logo" />
                </Navbar.Brand>

                <Navbar.Menu>
                    <Navbar.Segment as="div" className="navbar-item navbar-center">
                        <SearchBox />
                    </Navbar.Segment>
                </Navbar.Menu>
            </Navbar>
        </Container>
    </div>
);

export default Header;
