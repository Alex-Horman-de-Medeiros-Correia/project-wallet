// Esse reducer será responsável por tratar as informações da pessoa usuária
const ESTADO_INICIAL = {
  email: '',
};

function user(state = ESTADO_INICIAL, action) {
  switch (action.type) {
  case 'EMAIL_MUDANCA':
    return ({
      email: action.email,
    });
  default:
    return state;
  }
}

export default user;
