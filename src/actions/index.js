// Coloque aqui suas actions
export const emailHere = ({ email }) => ({
  type: 'EMAIL_MUDANCA',
  email,
});

export const currenciesHere = (currencies) => ({
  type: 'CURRENCIES_MUDANCA',
  currencies,
});

export const expensesHere = (state) => ({
  type: 'EXPENSES_MUDANCA',
  state,
});

export function currenciesAPI() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const API = await response.json();

    const data = [Object.keys(API)];

    const filtrando = data[0].filter((element) => element !== 'USDT');

    return dispatch(currenciesHere(filtrando));
  };
}
