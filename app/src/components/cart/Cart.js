/**
 * Created by edgar on 11/01/2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Row, Col } from 'reactstrap';

import ShopItem from '../common/ShopItem';
import CartSummary from '../common/CartSummary';

import * as cartActions from '../../actions/cartActions';

@connect((store) => {
  const cartItems = store.cart.items;
  const cartTotal = store.cart.total;
  return { cartItems, cartTotal };
}, { removeItem: cartActions.removeItem, calculateItems: cartActions.calculateItems })
export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }


  handleCalculateClick = () => {
    this.props.calculateItems();
  };

  handleRemoveItem = (item) => {
    this.props.removeItem(item);
  };

  render() {
    const title = 'Cart';
    const { cartItems, cartTotal } = this.props;

    const itemsElements = cartItems && cartItems.map(item => (
      <li class="list-group-item" key={`item${item.id}`}>
        <ShopItem
          item={item.shopItem}
          onActionClick={() => this.handleRemoveItem(item)}
          mode="cart"
        />
        count: {item.num}
      </li>
    ));

    return (
      <div>
        <h3>{title}</h3>
        <Row>
          <Col>
            <ul>
              {itemsElements}
            </ul>
          </Col>
        </Row>
        <Row>
          <Col class="col-sm-6">
            <CartSummary cartItems={cartItems} cartTotal={cartTotal} />
          </Col>
        </Row>
        <Row>
          <Col>
            {/* <Button onClick={this.handleCalculateClick}>Calculate</Button> */}
          </Col>
        </Row>
      </div>
    );
  }
}

Cart.propTypes = {
  calculateItems: PropTypes.func,
  removeItem: PropTypes.func,
  cartItems: PropTypes.array,
  cartTotal: PropTypes.number,
};

