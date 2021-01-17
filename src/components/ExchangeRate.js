import React, {useEffect} from "react";
import { RateTable } from "./RateTable";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { AmountField } from "./AmountField";
import {useDispatch, useSelector} from "react-redux";
import {changeCurrencyCode, getAmount, getCurrencyCode, getCurrencyData} from "../store/rates";

export function ExchangeRate() {

    const dispatch = useDispatch();
    const amount = useSelector( getAmount );
    const currencyCode = useSelector( getCurrencyCode );
    const currencyData = useSelector ( getCurrencyData );

  // fetch the exchange rates each time currency code changes
  useEffect(() => {
      dispatch(changeCurrencyCode(currencyCode));
  }, []);

  return (
    <>
      <section>
        <h1 className="ExchangeRate-header">
          Exchange Rates{" "}
          <CurrencyCodePicker
            currencyCode={currencyCode}
          />
        </h1>
      </section>
      <section>
        <AmountField amount={amount} />
      </section>
      <section>
        <RateTable currencyData={currencyData} amount={amount} />
      </section>
    </>
  );
}
