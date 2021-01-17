import React from "react";
import ReactDOM from "react-dom";
import { ExchangeRate } from "./components/ExchangeRate";
import "./style.css";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {changeCurrencyCode, getCurrencyCode} from "./store/rates";

store.dispatch(function getInitialRates(dispatch, getState) {
    const state = getState();
    const currencyCode = getCurrencyCode( state );
    dispatch(changeCurrencyCode(currencyCode));
});

ReactDOM.render(<Provider store={store}><ExchangeRate /></Provider>, document.getElementById("root"));
