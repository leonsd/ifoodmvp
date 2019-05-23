import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Navbar, Container, Icon } from 'rbx';
import { FaCrosshairs, FaShoppingBasket } from 'react-icons/fa';

import LogoImage from 'assets/images/logo-v1-horizontal.png';
import SearchBox from 'components/search-box';
import { showModal } from 'store/actions/modal';

import history from '../../history';

import 'styles/header.scss';

const Header = (props) => {
    return (
        <div className="top-navbar">
            <Container>
                <Navbar>
                    <Navbar.Brand
                        alt="logo"
                        onClick={(e) => {
                            return history.push('/');
                        }}
                    >
                        <img src={LogoImage} />
                    </Navbar.Brand>
                    <Navbar.Menu>
                        <Navbar.Segment as="div" className="navbar-item navbar-center" align="">
                            <SearchBox />
                        </Navbar.Segment>
                        <Navbar.Segment as="div" align="end">
                            <Navbar.Item
                                onClick={() => {
                                    return props.showModal('ADDRESS');
                                }}
                            >
                                <Icon color="has-custom-black">
                                    <FaCrosshairs />
                                </Icon>
                                <p>Endereço</p>
                            </Navbar.Item>
                            <Navbar.Item
                                onClick={() => {
                                    return props.showModal('ORDER');
                                }}
                            >
                                <Icon color="has-custom-black">
                                    <FaShoppingBasket />
                                </Icon>
                                <p>Sacola</p>
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

export default connect(
    null,
    mapDispatchToProps,
)(Header);
