import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { setErrorMessage, setSearchParams } from '../../services/stateService';
import { useSelector, useDispatch } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';

function FormComponent({ show, handleClose, searchProps }) {

    const [startDateFrom, setStartDateFrom] = useState(new Date());
    const [startDateTo, setStartDateTo] = useState(new Date());
    const dateFormat = "dd.MM.yyyy";
    const pageSize = useSelector((state) => state.searchParams.pageSize);
    const dispatch = useDispatch();

    const languages = [
        { label: 'English', code: 'en' },
        { label: 'Russian', code: 'ru' },
        { label: 'Germany', code: 'de' },
        { label: 'French', code: 'fr' },
        { label: 'Spanish', code: 'es' },
    ];

    function capitalize(str) {
        return str[0].toUpperCase() + str.substring(1);
    }

    // Sobytija eto zaimadejstvije mezhdu pol'zovateljam i nahsem prilozhenijem
    // Pol'zovatel' 4toto delajet v brauzere, brauzer lovit eti dvizhenije i peredajot informaciju nashemu prilozheniju
    // V zavisimosti ot triggerov nashe prilozhenije obrabatqvajet poluchennqje dannye
    // Triggery bqvajut raznqje, naprimer triger pri nazhatii knopki mqshki nazqvajetsa onClick
    // Trigery veshajutsa na elementy za kotorqmi my hotim sledit'
    // Trigery zapuskajut obrabotchki
    // Obratchiki eto obqchnqje funkcqii
    // Brauzer peredajot nashqm obrabotchikam polnqj otchjot o dejstvii/sobytii v vide objecta DOM
    // Glavnoe svojstvo etogo objecta javljatsa 'target' v kotorom hranitsa informacija ob elemnte nad kotorqm proizoshlo sobqtije
    async function handleSubmit(event) {
        // preventDefault eta funkcija zastovljajet brauzer prekratit' vqpolnjat' izvestnoe jemu dejstvije etogo sobitija
        // v nashem slu4aje eto zastovljajet otmenit' otpravku dannyh na server.
        event.preventDefault();
     
        const data = {
            q: event.target.q.value,
            from: moment(startDateFrom).format("YYYY-MM-DDT00:00:00.000"),
            to: moment(startDateTo).format("YYYY-MM-DDT23:59:59.999"),
            language: event.target.language.value,
            searchIn: [...event.target.searchIn].filter(input => input.checked).map(input => input.value).join(','),
            pageSize,
            page: 1,
        };

        if(moment(data.from).isAfter(data.to)) {
            dispatch(setErrorMessage("Wrong data from"));
            return;
        }

        dispatch(setSearchParams(data));
        handleClose();
    }

    return (
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Search News</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Keywords</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="q" 
                            placeholder="Enter keywords or phrases" 
                            defaultValue={searchProps.q}
                            />
                        <Form.Text className="text-muted">
                            Advanced search is supported here
                        </Form.Text>
                    </Form.Group>

                    {['title', 'description', 'content'].map((type) => (
                        <div key={`${type}`} className="mb-3">
                            <Form.Check
                                label={capitalize(type)}
                                name="searchIn"
                                type="checkbox"
                                value={type}
                                id={`${type}-1`}
                                defaultChecked={searchProps.searchIn.includes(type)}
                            />
                        </div>
                    ))}

                    <Form.Group className="mb-3">
                        <Form.Label>From - to</Form.Label>
                        <InputGroup className="mb-3 flex-nowrap">
                            <DatePicker
                                className="form-control"
                                selected={startDateFrom}
                                onChange={(date) => setStartDateFrom(date)}
                                name="from"
                                dateFormat={dateFormat}
                            />
                            <DatePicker
                                className="form-control"
                                selected={startDateTo}
                                onChange={(date) => setStartDateTo(date)}
                                name="to"
                                dateFormat={dateFormat}
                            />

                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Select Language</Form.Label>
                        <Form.Select name="language" defaultValue={searchProps.language}>
                            {languages.map((lang) => (
                                <option key={lang.code} value={lang.code}>{lang.label}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                        Search
                    </Button>
                </Form>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default FormComponent;
