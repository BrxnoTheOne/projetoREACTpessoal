
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
    <h1>Hello world !</h1>
    <p>O melhor site para assistir seus filmes preferidos !</p>
    </Container>
    <Footer />
    </>
  );
}

export default App;
