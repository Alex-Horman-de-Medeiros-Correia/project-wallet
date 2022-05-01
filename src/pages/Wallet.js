import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { currenciesAPI } from '../actions/index';
import Form from '../components/Form';

class Wallet extends React.Component {
  componentDidMount() {
    const { currenciesHere } = this.props;
    currenciesHere();
  }

  render() {
    const { email } = this.props;
    return (
      <>
        <header>
          <h1>TrybeWallet</h1>
          <h2 data-testid="email-field">
            {' '}
            { `Email da pessoa usuária: ${email} `}
            {' '}
          </h2>
          <br />
          Despesa Total:
          <h3 data-testid="total-field">
            {' '}
            { '0'}
            {' '}
          </h3>
          <br />
          Cambio Utilizado:
          <h3 data-testid="header-currency-field">
            {' '}
            { 'BRL'}
            {' '}
          </h3>
        </header>
        <Form />
      </>
    );
  }
}

Wallet.propTypes = {
  email: propTypes.string.isRequired,
  currenciesHere: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  currenciesHere: () => dispatch(currenciesAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
