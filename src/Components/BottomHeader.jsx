import React, { useState } from "react";
import styled from "styled-components";
import categories from "./categories";
import arrow from "../assets/images/right-arrow.svg";

const BottomHeader = () => {
  const [selectIndex, setSelectIndex] = useState(0);

  const handleSelect = (index) => {
    setSelectIndex(index);
  };

  return (
    <BottomHeaderContainer>
      {categories.map((category, index) => (
        <button
          onClick={() => handleSelect(index)}
          key={index}
          className={selectIndex === index ? "button-selected" : ""}
        >
          {category.title}
        </button>
      ))}

      <img className="arrow" src={arrow} alt="" />
    </BottomHeaderContainer>
  );
};

export default BottomHeader;

const BottomHeaderContainer = styled.div`
  background-color: #fff;
  padding: 14px 30px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  position: relative;

  .arrow {
    position: absolute;
    right: 2%;
    top: 50%;
    transform: translateY(-50%);
  }

  button {
    display: block;
    min-width: max-content;
    border: none;
    padding: 12px 21px 11px 19px;
    border-radius: 6px;
    border: solid 1.5px #ebebeb;
    background-color: #fff;
    font-size: 16px;
    font-weight: 500;
    color: #2a2a2e;
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 12px;
    }
  }

  .button-selected {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
    background-color: #01896a;
    color: #fff;
    font-weight: 600;
    border: none;
  }

  /* MEDIA QUERY */
  @media (max-width: 768px) {
    padding: 10px 0 4px 65px;
    flex-wrap: wrap;

    .arrow {
      right: 5%;
    }

    button {
      padding: 4px 8px;
      font-size: 12px;

      &:not(:last-child) {
        margin-bottom: 8px;
      }
    }
  }
`;
