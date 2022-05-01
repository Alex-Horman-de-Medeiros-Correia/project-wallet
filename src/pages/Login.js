import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { emailHere } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      desabilitado: true,
      email: '',
      password: '',
    };
  }

  funcRenderInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, () => {
      const { email, password } = this.state;

      const reg = new RegExp(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      );
      const minimum = 5;
      const passValidacao = password.length > minimum;
      const emailValidacao = reg.test(email) && passValidacao;

      // aqui eu obtive ajuda através de uma revisão em grupo onde sugestões foram feitas para esse requisito.

      this.setState({ desabilitado: !emailValidacao });
    });
  }

  render() {
    const { desabilitado, email, password } = this.state;
    const { dispararEmail } = this.props;

    return (
      <div>
        <h1>Login</h1>
        EMAIL:
        <br />
        <input
          type="email"
          data-testid="email-input"
          name="email"
          value={ email }
          onChange={ this.funcRenderInput }
        />

        <br />
        <br />
        SENHA:
        <br />
        <input
          type="password"
          data-testid="password-input"
          name="password"
          value={ password }
          onChange={ this.funcRenderInput }
        />

        <br />
        <br />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ desabilitado }
            onClick={ (event) => {
              this.funcRenderInput(event);
              dispararEmail({ email });
            } }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

Login.propTypes = {
  dispararEmail: propTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispararEmail: (email) => dispatch(emailHere(email)),
});

export default connect(null, mapDispatchToProps)(Login);
