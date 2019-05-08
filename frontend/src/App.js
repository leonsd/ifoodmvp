import React from 'react';
import { Container, Section } from 'rbx';

import './App.scss';
import Header from './components/header';
import Routes from './routes';

const App = () => (
    <div>
        <Header />
        <Section>
            <Container>
                <Routes />
            </Container>
        </Section>
    </div>
);

export default App;
