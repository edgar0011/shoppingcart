
import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import Collapse from 'react-collapse';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as cartActions from '../../actions/cartActions';
import ShopItem from '../common/ShopItem';
import CartSummary from '../common/CartSummary';


@connect((store) => {
  const { shop } = store;
  const { cart } = store;
  return { shopItems: shop.items, cartTotal: cart.total, cartItems: cart.items };
}, { addItem: cartActions.addItem,
  editItem: cartActions.editItem,
  removeItem: cartActions.removeItem,
  calculateItems: cartActions.calculateItems,
})
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemDetail: {},
      itemDetailOpened: false,
    };
  }

  handleItemActionClick = (item) => {
    this.props.addItem(item);
  };

  handleItemClick = (item) => {
    this.setState({ itemDetailOpened: true, itemDetail: item });
  };
  hideItemDetail() {
    this.setState({ itemDetailOpened: false });
  }

  handleCalculateClick = () => {
    this.props.calculateItems();
  };

  render() {
    const title = 'Shopping';
    const { shopItems, cartTotal, cartItems } = this.props;
    const items = shopItems.map(item => (
      <div key={`item${item.id}`} style={{ width: '50%', display: 'inline-block' }} >
        <ShopItem
          item={item}
          onClick={() => this.handleItemClick(item)}
          onActionClick={() => this.handleItemActionClick(item)}
        />
      </div>
    ));

    const { itemDetail } = this.state;

    return (
      <Row>
        <Col>
          <Row>
            <Col><h3>{title}</h3></Col>
          </Row>
          <Row>
            <Col class="col-sm-8">
              <Collapse
                isOpened={items && items.length > 0}
                springConfig={{ stiffness: 300, damping: 30 }}
              >
                {/* {items && items.length > 0 && <ul class="list-group">{items}</ul>} */}
                {items && items.length > 0 && <div >{items}</div>}
              </Collapse>
            </Col>
            <Col class="col-sm-4">
              <Row>
                <Col class="col-sm-6">
                  <div>
                    <Button onClick={this.handleCalculateClick}>Calculate</Button>
                  </div>
                </Col>
                <Col class="col-sm-6">
                  <CartSummary cartItems={cartItems} cartTotal={cartTotal} />
                </Col>
              </Row>
              <Collapse
                isOpened={this.state.itemDetailOpened}
                springConfig={{ stiffness: 300, damping: 40 }}
              >
                {itemDetail && <ShopItem item={itemDetail} mode="detail" />}
                <Button
                  class="btn btn-info"
                  onClick={() => {
                    this.hideItemDetail();
                  }}
                >Close</Button>
              </Collapse>
            </Col>
          </Row>

        </Col>
      </Row>
    );
  }
}

Main.propTypes = {
  addItem: PropTypes.func,
  calculateItems: PropTypes.func,
  shopItems: PropTypes.array,
  cartItems: PropTypes.array,
  cartTotal: PropTypes.number,
};
