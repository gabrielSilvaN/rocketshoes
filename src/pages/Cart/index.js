import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

function Cart() {
  return (
    <Container>

      <ProductTable>

        <thead>

          <tr>

            <th></th>

            <th>PRODUTO</th>

            <th>QTD</th>

            <th>SUBTOTAL</th>

            <th></th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>
              <img src="https://static.netshoes.com.br/produtos/tenis-adidas-run-falcon-feminino/12/NQQ-0553-012/NQQ-0553-012_zoom1.jpg?ts=1587049970&ims=544x" alt="Tênis" />
            </td>

            <td>
              <strong>Tênis legal</strong>
              <span>R$ 129.90</span>
            </td>

            <td>
              <div>
                <button>
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" value={1} readOnly />
                <button>
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>

            <td>
              <strong>R$ 258.80</strong>
            </td>

            <td>
              <button>
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>

          </tr>

        </tbody>

      </ProductTable>

      <footer>
        <button>Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$ 1500.00</strong>
        </Total>
      </footer>
    </Container>
  );
}

export default Cart;
