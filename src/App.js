
import Card from './components/Card';
import Container from './components/Container';
import Header from './components/Header';
import Banner from './components/Header/Banner';
import Footer from './components/Header/Footer';

function App() {
  return (

    <>
    <Header /> {/*as outras tags funcionam como tag de abertura e fechamento porque elas não passam parametros(PROPS) para funçoes */}
    <Banner image="banner" /> 
     <Container >  {/* tudo dentro desse container são os "filhos"(children no modulo container) */}
    <Card />
    </Container>
    <Footer />
    </>
  );
}

export default App;
