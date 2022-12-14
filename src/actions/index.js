// Coloque aqui suas actions
export const emailHere = ({ email }) => ({
  type: 'EMAIL_MUDANCA',
  email,
});

export const currenciesHere = (currencies) => ({
  type: 'CURRENCIES_MUDANCA',
  currencies,
});

export const expensesHere = (expenses) => ({
  type: 'EXPENSES_MUDANCA',
  expenses,
});

export const expensesDelete = (expenses) => ({
  type: 'DELETE_EXPENSES',
  expenses,
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
