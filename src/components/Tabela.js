import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Tabela extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
    // essas tags abaixo, tomei ciência delas através de dica em grupo de estudos.
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>

        { expenses.map((element) => (
          <tbody key={ element.id }>
            <tr>
              <td>
                {' '}
                { element.description }
                {' '}
              </td>
              <td>
                {' '}
                { element.tag }
                {' '}
              </td>
              <td>
                {' '}
                { element.method }
                {' '}
              </td>
              <td>
                {' '}
                { parseFloat(element.value).toFixed(2) }
                {' '}
              </td>
              <td>
                {' '}
                { element.exchangeRates[element.currency].name }
                {' '}
              </td>
              <td>
                {' '}
                { parseFloat(element.exchangeRates[element.currency].ask).toFixed(2) }
                {' '}
              </td>
              <td>
                {' '}
                { parseFloat(element.value * element.exchangeRates[element.currency].ask)
                  .toFixed(2) }
                {' '}
              </td>
              <td>Real</td>
              <td>Editar/Excluir</td>
            </tr>
          </tbody>
        )) }
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Tabela.propTypes = {
  expenses: propTypes.arrayOf(propTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Tabela);
