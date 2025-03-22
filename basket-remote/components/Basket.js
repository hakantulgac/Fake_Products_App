import React from 'react'
import { Button, Card } from 'antd';

const Basket = ({ basketActions }) => {

  const { resetBasket, removeItemById, basket, dispatch } = basketActions;

  return (
    <div>
      {Array.isArray(basket) && basket.length > 0 ? (
        <div>
          <Button danger block onClick={()=>dispatch(resetBasket())}>Remove All</Button>
          {basket.map((item, index) => (
            <Card className='basket-card'>
              <div className='card-container' key={index}>
                <div className='card-img-container'>
                  <img
                    className='card-img'
                    alt="product"
                    src={item.image}
                  />
                </div>
                <div>
                  <p>{item.title}</p>
                  <div>
                    <span className='basket-price'>{item.price}$</span>
                    <span
                      className='basket-remove'
                      onClick={() => { dispatch(removeItemById(item.id)) }}
                    >Remove</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <p>Basket is empty</p>
      )}
    </div>
  )
}

export default Basket