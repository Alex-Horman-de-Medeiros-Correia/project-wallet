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
    const { email, expenses } = this.props;
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
            { expenses.reduce((acc, currentValue) => acc
            + (parseFloat(currentValue.value)
            * parseFloat(currentValue.exchangeRates[currentValue.currency].ask)), 0) // essa parte eu obtive por meio de dica em grupo de estudo.
              .toFixed(2) }
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
  expenses: propTypes.arrayOf(propTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  currenciesHere: () => dispatch(currenciesAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
