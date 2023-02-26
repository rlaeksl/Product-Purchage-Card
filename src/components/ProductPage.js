import React from 'react';
import './../style/productPage.css';

const ProductPage = () => {
  return (
    <main>
      <img
        className="product-img"
        src="https://velog.velcdn.com/images/leejh4197/post/ffe9e3fa-0571-4c0f-b31d-80c0d51a6d00/image.png"
      />
      <h1>래피젠 코로나 자가 검사 키트 2개입X1박스</h1>
      <div className="price-wrap">
        <p>88%</p>
        <p>
          <span>56,760원</span>6,370원
        </p>
      </div>
      <div>
        <span>택배배송</span>
        <span>3,000원</span>
        <span>(주문시 결제)</span>
        <p>10개마다 부과</p>
      </div>
      <div>
        <button>-</button>
        <div>1</div>
        <button>+</button>
      </div>
      <div>
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
