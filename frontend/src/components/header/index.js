import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Navbar, Container, Icon } from 'rbx';
import { FaCrosshairs } from 'react-icons/fa';

import LogoImage from 'assets/images/logo-v1-horizontal.png';
import SearchBox from 'components/search-box';
import { showModal } from 'store/actions/modal';

import 'styles/header.scss';

const Header = (props) => {
    return (
        <div className="top-navbar">
            <Container>
                <Navbar>
                    <Navbar.Brand>
                        <img src={LogoImage} alt="logo" />
                    </Navbar.Brand>

                    <Navbar.Menu>
                        <Navbar.Segment as="div" className="navbar-item navbar-center" align="">
                            <SearchBox />
                        </Navbar.Segment>
                        <Navbar.Segment as="div" align="end">
                            <Navbar.Item onClick={() => props.showModal('ADDRESS')}>
                                <Icon color="has-custom-black">
                                    <FaCrosshairs />
                                </Icon>
                                <p>Endereço</p>
                            </Navbar.Item>
                        </Navbar.Segment>
                    </Navbar.Menu>
                </Navbar>
            </Container>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ showModal }, dispatch);
};

export default connect(null, mapDispatchToProps)(Header);
