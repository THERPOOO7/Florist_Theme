import React from 'react'

const CartPage = () => {
  return (
    <div>
      
      <section className="cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="cart__table">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="cart__item">
                        <div className="cart__item__pic">
                          <img src="img/cart/cat-1.jpg" alt="" />
                        </div>
                        <div className="cart__item__text">
                          <h4>Cactus Gym</h4>
                          <span>$21.00</span>
                        </div>
                      </td>
                      <td className="cart__quantity">
                        <div className="quantity">
                          <div className="pro-qty">
                            <span className="dec qtybtn">-</span>
                            <input type="text" defaultValue={1} />
                            <span className="inc qtybtn">+</span>
                          </div>
                        </div>
                      </td>
                      <td className="cart__price">$21.00</td>
                      <td className="cart__close">
                        <i className="fa fa-times-circle" />
                      </td>
                    </tr>
                    <tr>
                      <td className="cart__item">
                        <div className="cart__item__pic">
                          <img src="img/cart/cat-2.jpg" alt="" />
                        </div>
                        <div className="cart__item__text">
                          <h4>Fly Me To The Moon</h4>
                          <span>$21.00</span>
                        </div>
                      </td>
                      <td className="cart__quantity">
                        <div className="quantity">
                          <div className="pro-qty">
                            <span className="dec qtybtn">-</span>
                            <input type="text" defaultValue={1} />
                            <span className="inc qtybtn">+</span>
                          </div>
                        </div>
                      </td>
                      <td className="cart__price">$21.00</td>
                      <td className="cart__close">
                        <i className="fa fa-times-circle" />
                      </td>
                    </tr>
                    <tr>
                      <td className="cart__item">
                        <div className="cart__item__pic">
                          <img src="img/cart/cat-3.jpg" alt="" />
                        </div>
                        <div className="cart__item__text">
                          <h4>Fly Me To The Moon</h4>
                          <span>$21.00</span>
                        </div>
                      </td>
                      <td className="cart__quantity">
                        <div className="quantity">
                          <div className="pro-qty">
                            <span className="dec qtybtn">-</span>
                            <input type="text" defaultValue={1} />
                            <span className="inc qtybtn">+</span>
                          </div>
                        </div>
                      </td>
                      <td className="cart__price">$21.00</td>
                      <td className="cart__close">
                        <i className="fa fa-times-circle" />
                      </td>
                    </tr>
                    <tr>
                      <td className="cart__item">
                        <div className="cart__item__pic">
                          <img src="img/cart/cat-4.jpg" alt="" />
                        </div>
                        <div className="cart__item__text">
                          <h4>Fly Me To The Moon</h4>
                          <span>$21.00</span>
                        </div>
                      </td>
                      <td className="cart__quantity">
                        <div className="quantity">
                          <div className="pro-qty">
                            <span className="dec qtybtn">-</span>
                            <input type="text" defaultValue={1} />
                            <span className="inc qtybtn">+</span>
                          </div>
                        </div>
                      </td>
                      <td className="cart__price">$21.00</td>
                      <td className="cart__close">
                        <i className="fa fa-times-circle" />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="cart__btn">
                  <div className="row">
                    <div className="col-lg-4 col-md-5">
                      <div className="cart__btn__continue">
                        <a href="#">
                          <span className="arrow_back" /> Continute shopping
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-7">
                      <div className="cart__btn__right">
                        <a href="#">
                          <span className="icon_trash_alt" /> Clear shopping cart
                        </a>
                        <a href="#">
                          <span className="icon_loading" /> Update cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cart__coupon">
                <p>Enter coupon code. It will be applied at checkout.</p>
                <form action="#">
                  <input type="text" placeholder="Your code here" />
                  <button type="submit">APPLY</button>
                </form>
              </div>
              <div className="cart__total">
                <h4>Cart Total</h4>
                <ul>
                  <li>
                    Subtotal <span>$217.00</span>
                  </li>
                  <li>
                    Total <span>$217.00</span>
                  </li>
                </ul>
                <a href="#">PROCEED TO CHECKOUT</a>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default CartPage