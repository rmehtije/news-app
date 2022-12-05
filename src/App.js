import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import BodyComponent from './Body';
import HeaderComponet from './Header';
import PaginationComponent from './Footer';
import ErrorModalComponent from './ErrorModal';
import ContactComponent from './Body/Contact';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Container>
      <HeaderComponet />
      <Routes>
        <Route path="/news-app" element={
          <>
            <BodyComponent />
            <PaginationComponent />
          </>
        } />
        <Route path="/news-app/:q" element={
          <>
            <BodyComponent />
            <PaginationComponent />
          </>
        } />
        <Route path="/news-app/lang/:lang" element={
          <>
            <BodyComponent />
            <PaginationComponent />
          </>
        } />
        <Route path="/news-app/contact" element={<ContactComponent />} />
      </Routes>
      <ErrorModalComponent />
    </Container>
  );
}

export default App;
