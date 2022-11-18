import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NewsGroupComponent from './Body';
import HeaderComponet from './Header';
import PaginationComponent from './Footer';
import moment from 'moment';
import ErrorModalComponent from './ErrorModal';

function App(props) {

  return (
      <Container>
        <HeaderComponet />
        <NewsGroupComponent {...props} />
        <PaginationComponent />
        <ErrorModalComponent />
      </Container>
  );
}

App.defaultProps = {
  q: 'авто',
  from: moment().format("YYYY-MM-DDT00:00:00.000"),
  to: moment().format("YYYY-MM-DDT23:59:59.999"),
  language: 'ru',
  searchIn: 'title,description,content',
  pageSize: 12,
  page: 1,
}

export default App;
