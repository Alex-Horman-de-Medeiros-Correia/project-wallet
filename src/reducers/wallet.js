// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const ESTADO_INICIAL = {
  currencies: [],
  expenses: [],
};

function wallet(state = ESTADO_INICIAL, action) {
  switch (action.type) {
  case 'CURRENCIES_MUDANCA':
    return ({
      ...state,
      currencies: action.currencies,
    });

  case 'EXPENSES_MUDANCA':
    return ({
      ...state,
      expenses: [...state.expenses, action.expenses],
    });
  default:
    return state;
  }
}

export default wallet;
