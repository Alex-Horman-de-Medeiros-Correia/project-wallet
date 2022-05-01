import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Form extends React.Component {
  render() {
    const { currencies } = this.props;

    return (
      <div>
        Valor da Despesa:
        <br />
        <input type="number" name="number" data-testid="value-input" />

        <br />
        <br />
        Descrição da Despesa:
        <br />
        <input type="text" name="text" data-testid="description-input" />

        <br />
        <br />
        <label htmlFor="currencies">
          Moeda:
          <br />
          <select name="currencies" id="currencies">
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
        <select name="pagamento" data-testid="method-input">
          <option value="Dinheiro"> Dinheiro </option>
          <option value="Cartão de crédito"> Cartão de crédito </option>
          <option value="Cartão de débito"> Cartão de débito </option>
        </select>

        <br />
        <br />
        Categoria:
        <br />
        <select name="categoria" data-testid="tag-input">
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Form.propTypes = {
  currencies: propTypes.arrayOf(propTypes.string).isRequired,
};

export default connect(mapStateToProps, null)(Form);
