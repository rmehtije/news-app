import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NewsGroupComponent from './Body';
import HeaderComponet from './Header';
import PaginationComponent from './Footer';
import ErrorModalComponent from './ErrorModal';
import ContactComponent from './Body/Contact';
import { Routes, Route } from 'react-router-dom';

// Komponenty v react eto obychnqii js funkcqii kotorqje vozvrashajut JSX/React element;
function App() {

  // JSX eta novyj sintext ot react kotorqj sovmeshajet s soboj js i html v udobnom vide.
  // JSX/React elemnt imejet pravelo: vozvrashajetsa tol'ko odin element ili komponent. Odin glavnyj i beskone4no vtorastipennqh
  // v JSX atribut class pereimenovan v className

  // react-router-dom eto biblioteka kotoraja pomogajet nam rabotat' s sylkami
  // kazhdyj komponent Route otvechajet za kakujunibud' ssqlku
  // v Route my peredajom te komponentq kotorqje my hotim videt' po, dannoj v path properti, ssylki
  // my mozhem peredavat' dannye s sylki komponentam
  // ':' oznochajut 4to my vozmjom vsjo 4to napisano posle / i peredadim v peremennuju kotoruju nazna4ili posle ':'
  // v nashem slu4ii http://localhost:3000/privet budet oznachat' 4to my pokazqvajem newsGroup i pagination komponenty 
  // i peredajom im peremnnuju q s znachenije 'privet'
  return (
    <Container>
      <HeaderComponet />
      <Routes>
        <Route path="/" element={
          <>
            <NewsGroupComponent />
            <PaginationComponent />
          </>
        } />
        <Route path="/:q" element={
          <>
            <NewsGroupComponent />
            <PaginationComponent />
          </>
        } />
        <Route path="/lang/:lang" element={
          <>
            <NewsGroupComponent />
            <PaginationComponent />
          </>
        } />
        <Route path="/contact" element={<ContactComponent />} />
      </Routes>
      <ErrorModalComponent />
    </Container>
  );
}

export default App;
