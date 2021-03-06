import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import NewsScreen from './screens/NewsScreen';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <NewsScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
