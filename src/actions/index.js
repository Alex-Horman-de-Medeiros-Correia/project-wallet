// Coloque aqui suas actions
export const emailHere = ({ email }) => ({
  type: 'EMAIL_MUDANCA',
  email,
});

export const currenciesHere = (state) => ({
  type: 'CURRENCIES_MUDANCA',
  state,
});

export const expensesHere = (state) => ({
  type: 'EXPENSES_MUDANCA',
  state,
});
