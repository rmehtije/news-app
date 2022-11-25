// redux eto biblioteka kotoraja pomogajet nam rabotat' s sostojanijami komponentov
// redux eto global'noe sostojanie prilozhenija
// redux zaimodejstvojet to'ko s temi komponentami s kotorqmi neobhodime, ne zatragivaja ostal'nyh v cepochke
// eto pomogajet lu4e kotrolirovat' otrisovku/render komponentov.
// redux rabotajet v ne zavisimosti ot strukturnogo dereva projekta.
// @reduxjs/toolkit eto glavnaja biblioteka redux
import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';
import moment from 'moment';

const pageSize = 12;
// peremennaja tip object : iznachal'noe sostojanie 
const initialState = {
    errorMessage: null,
    totalResults: pageSize,
    searchParams: {
        q: 'авто',
        from: moment().format("YYYY-MM-DDT00:00:00.000"),
        to: moment().format("YYYY-MM-DDT23:59:59.999"),
        language: 'ru',
        searchIn: 'title,description,content',
        pageSize,
        page: 1,
    }
};
// createAction deklarirujet dejstvije v redux
// Eto dejstvije my zapuskaem kogda hotim izmenit' sostojanie
export const setErrorMessage = createAction("setErrorMessage");
export const setPage = createAction("setPage");
export const setTotalResults = createAction("setTotalResults");
export const setSearchParams = createAction("setSearchParams");

// createReducer eto obratchik dejstvija
// Sdes' my govorim reduxu 4to my hotim sdelat' etim dejstvijem
// v nashem sluchaii i vosnovon my menjajem sostojanie
// action.payload - tut nahoditsa novaja peredannaja informacija
const reducer = createReducer(initialState, {
    [setErrorMessage]: (state, action) => {
        state.errorMessage = action.payload;
    },
    [setPage]: (state, action) => {
        state.searchParams.page = action.payload;
    },
    [setTotalResults]: (state, action) => {
        state.totalResults = action.payload;
    },
    [setSearchParams]: (state, action) => {
        state.searchParams = action.payload;
    }
});
// sdes' my vsjo sobirajem v odno i sozdajom tak nazqvajemoe hranilishe
export const store = configureStore({ reducer });

// hranilishe my peredajom v komponent Provider ot react-redux biblioteki i oborachevajem Ves' nash projekt im
