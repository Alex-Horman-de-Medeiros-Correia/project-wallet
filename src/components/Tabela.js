import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { expensesDelete } from '../actions/index';

class Tabela extends React.Component {
    handleDelete = ({ target: { name } }) => {
      const { expenses, delExpenses } = this.props;

      const hofDel = expenses.filter((element) => element.id !== Number(name));

      delExpenses(hofDel);
    }

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
                  { parseFloat(element.value
                  * element.exchangeRates[element.currency].ask)
                    .toFixed(2) }
                  {' '}
                </td>
                <td>Real</td>
                <td>
                  <button
                    data-testid="delete-btn"
                    type="button"
                    name={ expenses.id }
                    onClick={ this.handleDelete }
                  >
                    Deletar
                  </button>
                </td>
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

const mapDispatchToProps = (dispatch) => ({
  delExpenses: (expenses) => dispatch(expensesDelete(expenses)),
});

Tabela.propTypes = {
  expenses: propTypes.arrayOf(propTypes.object).isRequired,
  delExpenses: propTypes.arrayOf(propTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabela);
