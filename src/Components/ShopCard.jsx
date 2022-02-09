import React from "react";
import styled from "styled-components";
import CardSkeleton from "./CardSkeleton";

const ShopCard = ({ obj, loading }) => {
  const { addresses, meta, minOrderQty } = obj;

  const logo = meta?.logo.url;
  const name = meta?.companyName;
  const banners = meta?.banners;
  const city = addresses[0]?.city || "Dhaka";
  const country = addresses[0]?.country || "Bangladesh";

  return loading ? (
    <CardSkeleton />
  ) : (
    <CardContainer>
      <div className="cover">
        {banners?.map((banner, index) => (
          <img key={index} src={banner?.url} alt={banner?.name} />
        ))}
      </div>

      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="card-body">
        <h4>{name}</h4>

        <div className="d-flex">
          <p className="address">
            {city}, {country} .{" "}
          </p>

          <p className="quantity"> Min Qty: {minOrderQty}</p>
        </div>

        <p className="category">
          Trousers | Jackets | Shirts | Denim | Hoodies
        </p>

        <button>View Details</button>
      </div>
    </CardContainer>
  );
};

export default ShopCard;

const CardContainer = styled.div`
  height: 300px;
  background-color: #fff;
  padding: 7px 7px 23px;
  border-radius: 8px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .cover {
    min-height: 90px;
    background-color: #e7e7e7;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    align-items: center;

    & > * {
      flex: 1;
    }
    img {
      height: 90px;
      object-fit: cover;

      &:not(:last-child) {
        border-right: 3px solid #fff;
      }
    }
  }

  .logo {
    position: absolute;
    top: 25%;
    left: 25%;
    transform: translateX(-50%) translateY(-50%);
    height: 85px;
    width: 85px;
    border-radius: 100%;
    object-fit: cover;
  }

  .card-body {
    padding: 45px 5px 0px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h4 {
      font-size: 17px;
      font-weight: 800;
      color: #2a2a2e;
      margin-bottom: 10px;
    }

    p {
      font-size: 13px;
      font-weight: 600;
    }
    .address {
      color: #63636a;
    }

    .quantity {
      margin-left: 5px;
      color: #01896a;
    }
    .category {
      color: #63636a;
    }

    button {
      margin-top: 10px;
      width: max-content;
      border: none;
      border-radius: 100px;
      padding: 8px 20px 8px 22px;
      background-color: #d1ffd0;
      text-align: center;
      color: #01896a;
      font-weight: 600;
      font-size: 14px;
      transition: all 0.2s ease;

      &:active {
        transform: scale(0.95);
      }
    }
  }

  /* MEDIA QUERY */
  @media (max-width: 768px) {
    min-height: 300px;
    height: 350px;
  }
`;
