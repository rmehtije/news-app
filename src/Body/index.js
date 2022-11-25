import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import NewsCardComponent from './NewsCard';
import FormComponent from './Form';
import { getEverything } from '../services/apiServices';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorMessage, setTotalResults, setSearchParams } from '../services/stateService';
import { useParams, Link } from 'react-router-dom';
import './News.scss';

function NewsGroupComponet() {

    const [show, setShow] = useState(false);
    const [articles, setArticles] = useState([]);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    // useParams eto hook react-router-dom dlja poluchenija informacqii s sqlki
    const { q, lang } = useParams();
    // useDispatch eto hook react-redux i blagodorja jemu my mozhem zaimodejstvovat' s redux
    // useDispatch eto most mezhdu react i redux
    const dispatch = useDispatch();
    
    // useSelector eto react-redux hook kotorqj sledit za redux sostojaniem i pri nali4ii izmenenij zapuskaet otrisovku komponeneta
    const searchParams = useSelector((state) => state.searchParams);

    // useEffect - eto react hook kotorqj zapuskajetsja posle togo kak pervej render/otrisovka komponenta proizhosol
    // useEffect prinemajet 2 parametra
    // 1: Funkcaija kotoruju nuzhno zapustit'
    // 2: massive iz paremennyh ot kotorqh budet zaviset' dal'nejshaja rabota useEffecta
    // vse vneshnie peremennye kotorqje my ispol'zujem v funkcqii dolzhnq bqt' v massive zavisimostej
    // Pri ljubyh izmenenij etih zavisimostej useEffect zapuskajetsja
    // Pri izmenenij v komponente ne kasajushih zavisimosti useEffecta ne zapuskajut useEffect no komponent renderitsja
    // Poetomu v njom lu4e vsego rabotat' s zarposami
    useEffect(() => {
        if(lang && searchParams.language !== lang){
            dispatch(setSearchParams({
                ...searchParams,
                language: lang,
            }));
            return;
        }
        (async function () {
            try {
                const response = await getEverything({
                    ...searchParams,
                    q: q || searchParams.q,
                });
                const responseData = await response.json();
                if (responseData.status === 'error') {
                    throw responseData;
                }
                setArticles(responseData.articles);
                // redux dejstvie neobhodimo obernut' v dispatch
                dispatch(setTotalResults(responseData.totalResults));
            } catch (error) {
                dispatch(setErrorMessage(error.message));
            }
        })();
    }, [searchParams, dispatch, q, lang]);

    return (
        <>
            <Button variant="outline-primary" onClick={handleShow} className="mb-3">
                Search
            </Button>
            <Link to="/bitcoin">Bitcoin today</Link>
            <Row xs={1} md={2} lg={3} className="g-2">
                {articles.map((article, idx) => (
                    <Col key={idx}>
                        <NewsCardComponent article={article} />
                    </Col>
                ))}
            </Row>
            <FormComponent
                show={show}
                handleClose={handleClose}
                setArticles={setArticles}
                searchProps={searchParams}
            />
        </>
    );
}

export default NewsGroupComponet;
