import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { expensesHere } from '../actions/index';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      id: 0,
      exchangeRates: {},
    };
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleClick = async () => {
    const { expenses } = this.props;

    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const responseTwo = await response.json();
    /* console.log(responseTwo); */
    /* const data = responseTwo.filter((element) => element !== 'USDT'); */

    const { value, description, currency, method, tag, id } = this.state;

    const tudoJuntoEMisturado = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: responseTwo,
    };

    expenses(tudoJuntoEMisturado);
    this.setState((prev) => ({
      ...prev,
      id: prev.id + 1,
      value: '',
    }));
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;

    return (
      <div>
        Valor da Despesa:
        <br />
        <input
          type="number"
          name="value"
          value={ value }
          data-testid="value-input"
          onChange={ this.handleInput }
        />

        <br />
        <br />
        Descrição da Despesa:
        <br />
        <input
          type="text"
          name="description"
          value={ description }
          data-testid="description-input"
          onChange={ this.handleInput }
        />

        <br />
        <br />
        <label htmlFor="currencies">
          Moeda:
          <br />
          <select
            name="currency"
            value={ currency }
            id="currencies"
            data-testid="currency-input"
            onChange={ this.handleInput }
          >
            { currencies.map((element) => (
              <option value={ element } key={ element }>
                {' '}
                { element }
                {' '}
              </option>
            ))}
          </select>
        </label>

        <br />
        <br />
        Pagamento:
        <br />
        <select
          name="method"
          value={ method }
          data-testid="method-input"
          onChange={ this.handleInput }
        >
          <option value="Dinheiro"> Dinheiro </option>
          <option value="Cartão de crédito"> Cartão de crédito </option>
          <option value="Cartão de débito"> Cartão de débito </option>
        </select>

        <br />
        <br />
        Categoria:
        <br />
        <select
          name="tag"
          value={ tag }
          data-testid="tag-input"
          onChange={ this.handleInput }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>

        <br />
        <br />
        <button type="button" onClick={ this.handleClick }>
          Adicionar despesa
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  expenses: (expenses) => dispatch(expensesHere(expenses)),
});

Form.propTypes = {
  currencies: propTypes.arrayOf(propTypes.string).isRequired,
  expenses: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
