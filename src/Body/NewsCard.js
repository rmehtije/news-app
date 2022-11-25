import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import noImage from '../dummy-post-horisontal.jpg';
import NewsModalComponent from './NewsModal';
import moment from 'moment';

function NewsCardComponent({ article }) {
    // useState = eta funkcija/hook kotoraja pomogajet rabotat' s sostojanijem komponenta
    // Sostojanie eta infromacija kotoruju komponent soderzhqt v sebe.
    // Pri izmenenii sostajanija zapuskajetsa novaja otrisovka/render komponenta.
    // U kazhdova sostojanije jest svojo iznachal'noe znachenije i funkcija kotoraja menjajet eto znachenije
    // useState prinemajet kak argument iznachal'noe zna4enije sostojanija i vqdajot massive s dvumja znachenijami
    // 1: inzachal'noe sostojanie
    // 2: funkciju dlja izmenenija sostojanija
    const [show, setShow] = useState(false);

    // Card component - eta komponent iz npm paketa react-bootstrap.
    // react-bootstrap eta biblioteka s gotovymi react komponentami napisany s ispol'zovnaiem bootstrap css toolkit
    return (
        <>
            <Card onClick={() => setShow(true)}>
                <Card.Img variant="top" src={article.urlToImage || noImage} />
                <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{article.source.name}</Card.Subtitle>
                    <Card.Text dangerouslySetInnerHTML={{ __html: article.description }}>
                    </Card.Text>
                    {article.author ? (
                        <blockquote className="blockquote mb-0">
                            <footer className="blockquote-footer">
                                <cite title="Author">{article.author}</cite>
                            </footer>
                        </blockquote>
                    ) : ''}
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{moment(article.publishedAt).format('DD.MM.YYYY')}</small>
                </Card.Footer>
            </Card>
            <NewsModalComponent show={show} setShow={setShow} article={article}/>
        </>
    );
}

export default NewsCardComponent;