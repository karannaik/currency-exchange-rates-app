const initialState = {
    amount: "1.0",
    currencyCode: "USD"
};

export function ratesReducer(state = initialState, action) {
    switch (action.type) {
        case AMOUNT_CHANGED:
            return { ...state, amount: action.payload };

        case CURRENCY_CODE_CHANGED:
            return { ...state, currencyCode: action.payload };

        default:
            return state;
    }
}

// selectors (think of this as an API to access state)
export const getAmount = (state) => state.rates.amount;
export const getCurrencyCode = (state) => state.rates.currencyCode;

// action types
export const AMOUNT_CHANGED = "rates/amountChanged";
export const CURRENCY_CODE_CHANGED = "rates/currencyCodeChanged";

// action creators (actions to access the APIs)
export const changeAmount = (amount) => ({
   type: AMOUNT_CHANGED,
   payload: amount
});

export const changeCurrencyCode = (currencyCode) => ({
    type: CURRENCY_CODE_CHANGED,
    payload: currencyCode
});