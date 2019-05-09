import React from 'react';
import { Container, Section } from 'rbx';

import 'styles/App.scss';
import Header from 'components/header';
import ModalRoot from 'components/modals';
import Routes from 'routes';

const App = () => (
    <div>
        <Header />
        <Section>
            <Container>
                <Routes />
            </Container>
        </Section>
        <ModalRoot />
    </div>
);

export default App;
