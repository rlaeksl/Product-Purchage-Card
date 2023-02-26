import React from 'react';
import { useState } from 'react';
import './../style/productPage.css';

const ProductPage = () => {
  const [add, setAdd] = useState(0);
  const totalPrice = add * 6370;

  const handlePlus = () => {
    setAdd(add + 1);
  };
  const handleMinus = () => {
    add === 0 ? 1 : setAdd(add - 1);
  };

  return (
    <main>
      <div className="product-info">
        <img
          className="product-img"
          src="https://velog.velcdn.com/images/leejh4197/post/ffe9e3fa-0571-4c0f-b31d-80c0d51a6d00/image.png"
        />
        <h1 className="product-title">
          <p>래피젠 코로나 자가 검사 키트</p>
          <p>2개입X1박스</p>
        </h1>
        <div className="price-wrap">
          <p className="product-discount">88%</p>
          <p className="product-price">
            <span className="product-original-price">56,760원</span>6,370원
          </p>
        </div>
      </div>
      <div className="product-delivery-charge">
        <span className="product-delivery-parcel">택배배송</span>
        <span className="product-delivery-price">3,000원</span>
        <span className="product-delivery-payment-method">(주문시 결제)</span>
        <p className="product-delivery-count-method">10개마다 부과</p>
      </div>
      <div className="product-quantity">
        <div className="product-qunatity-button">
          <button className="product-quantity-minus" onClick={handleMinus}>
            -
          </button>
          <div className="product-quantity-number">{add}</div>
          <button className="product-quantity-plus" onClick={handlePlus}>
            +
          </button>
        </div>
      </div>
      <div className="product-purchase-wrap">
        <p className="product-total-title">총 상품 금액</p>
        <p className="product-total-price">
          <span className="product-total-quantity">총 수량 {add}개</span>
          {totalPrice}원
        </p>
      </div>
      <button className="product-purchase-button">
        <div className="product-purchase-button-img"></div>
        <p>구매하기</p>
      </button>
    </main>
  );
};

export default ProductPage;
