import React from 'react';
import './../style/productPage.css';

const ProductPage = () => {
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
          <button className="product-quantity-minus">-</button>
          <div className="product-quantity-number">1</div>
          <button className="product-quantity-plus">+</button>
        </div>
      </div>
      <div className="product-purchase-wrap">
        <p>총 상품 금액</p>
        <p>
          <span>총 수량 1개</span>6,370원
        </p>
      </div>
      <button>구매하기</button>
    </main>
  );
};

export default ProductPage;
