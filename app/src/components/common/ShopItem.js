import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { Card, CardImg, CardBlock, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

export default function ShoppingItem(props) {
  const { name, imageUrl, productName, color,
    productMaterial, productAdjective, price } = props.item;
  const { onClick, onActionClick, mode } = props;
  const text = `${productName}, ${productMaterial}, ${productAdjective}, ${color}`;
  return (
    <div role="menuItem">
      <Card>
        <CardImg class="card-img-left" src={imageUrl} alt={name} onClick={onClick} />
        <CardBlock>
          <CardTitle>{price}<span style={{ margin: '5px', fontSize: '12px' }} class="fa fa-eur" /></CardTitle>
          <CardSubtitle>{name}</CardSubtitle>
          {mode && mode === 'detail' && <CardText><span>{text}</span></CardText>}
          {(!mode || (mode !== 'cart' && mode !== 'detail')) && <Button color="success" onClick={onActionClick}>Add</Button>}
          {mode && mode === 'cart' && <Button color="danger" onClick={onActionClick}>Remove</Button>}
        </CardBlock>
      </Card>
    </div>
  );
}

ShoppingItem.propTypes = {
  item: PropTypes.object,
  onClick: PropTypes.func,
  onActionClick: PropTypes.func,
  mode: PropTypes.string,
};
