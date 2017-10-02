import React from 'react';
import PropTypes from 'prop-types';

export default function CartSummary(props) {
  const { cartItems, cartTotal } = props;
  const cartItemsNums = cartItems.reduce((total, cartItem) => cartItem.num, 0);
  return (
    <div>
      {`Shop Items ${cartItems.length}`}
      <br />
      {`Shop Items Count ${cartItemsNums}`}
      <br />
      {`Cart Total ${cartTotal}`}<span class="fa fa-eur" style={{ margin: '5px', fontSize: '12px' }} />
    </div>
  );
}

CartSummary.propTypes = {
  cartItems: PropTypes.array,
  cartTotal: PropTypes.number,
};
