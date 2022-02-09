import React, { useState } from "react";
import styled from "styled-components";
import { CgMenuRight } from "react-icons/cg";

import searchIcon from "../assets/images/navbar/Iconly_Light_Search.svg";
import navIcon1 from "../assets/images/navbar/Iconly_Bold_Chat.svg";
import navIcon2 from "../assets/images/navbar/Iconly_Bold_Notification.svg";
import navIcon3 from "../assets/images/navbar/lacoste-logo.svg";

import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/core.css";

const Header = () => {
  const [select, setSelect] = useState(true);

  const handleSelectButton = () => {
    setSelect(!select);
  };

  return (
    <HeaderContainer>
      <div className="switch-box">
        <button
          onClick={handleSelectButton}
          className={select === true ? "button-selected" : ""}
        >
          Explore
        </button>
        <button
          onClick={handleSelectButton}
          className={select === false ? "button-selected" : ""}
        >
          Activity
        </button>
      </div>

      <div className="search-box">
        <img src={searchIcon} alt="" />
        <input
          type="text"
          placeholder="Search by name, group, type and others"
        />
      </div>

      <div className="notification-box">
        <a href="/">
          <img src={navIcon1} alt="" />
          <span>3</span>
        </a>
        <a href="/">
          <img src={navIcon2} alt="" />
          <span>2</span>
        </a>
        <a className="lacoste" href="/">
          <img src={navIcon3} alt="" />
        </a>
      </div>

      <Menu
        className="menu"
        menuButton={
          <MenuButton className="menu-button ">
            <CgMenuRight className="icon" />
          </MenuButton>
        }
      >
        <MenuItem className="menu-item">
          <div className="menu-search-box">
            <img src={searchIcon} alt="" />
            <input type="text" placeholder="Search by name" />
          </div>
        </MenuItem>

        <MenuItem className="menu-item">
          <div className="menu-notification-box">
            <a href="/">
              <img src={navIcon1} alt="" />
              <span>3</span>
            </a>
            <a href="/">
              <img src={navIcon2} alt="" />
              <span>2</span>
            </a>
            <a className="lacoste" href="/">
              <img src={navIcon3} alt="" />
            </a>
          </div>
        </MenuItem>
      </Menu>
    </HeaderContainer>
  );
};

export default Header;

/* -------------------------------------------------------------------------- */
/*                                NAVBAR STYLES                               */
/* -------------------------------------------------------------------------- */
const HeaderContainer = styled.nav`
  position: relative;
  background-color: #01896a;
  padding: 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  //menu
  .menu,
  .menu-button {
    display: none;
    border: none;
    background-color: transparent;
  }

  //switch-box
  .switch-box {
    width: 170px;
    height: 40px;
    border-radius: 100px;
    padding: 3px;
    box-shadow: 0 2px 0 0 #009d79, inset 0 2px 0 0 #006c53;
    background-color: #00775c;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      width: 80px;
      align-self: stretch;
      background-color: transparent;
      border: none;
      border-radius: 100px;
      font-size: 14px;
      font-weight: bold;
      color: #f2f2f2;
      cursor: pointer;
    }

    .button-selected {
      box-shadow: 0 2px 0 0 #006c53, inset 0 2px 0 0 #009d79;
      background-color: #009372;
    }
  }

  //search-box
  .search-box,
  .menu-search-box {
    min-width: 410px;
    border-radius: 100px;
    background-color: #fff;
    padding: 12px 15px;
    display: flex;
    align-items: center;

    input {
      flex: 1;
      height: 16px;
      border: none;
      margin-left: 10px;
      font-family: SFUIDisplay;
      font-size: 16px;
      font-weight: 500;
      text-align: left;
      color: #9797a0;

      &::placeholder {
        font-family: SFUIDisplay;
        font-size: 16px;
        font-weight: 500;
        text-align: left;
        color: #9797a0;
      }

      &:focus {
        outline: none;
      }
    }
  }

  //navigation-links
  .notification-box,
  .menu-notification-box {
    display: flex;
    align-items: center;

    a {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 42px;
      width: 42px;
      border-radius: 100%;
      background-color: #468174;

      &:not(:last-child) {
        margin-right: 1rem;
      }

      span {
        position: absolute;
        top: -5px;
        right: -5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        width: 20px;
        height: 20px;
        border-radius: 100%;

        background-color: #ac0000;
        color: #fff;
      }
    }

    .lacoste {
      background-color: #ffffff;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem 0 1rem 5rem;

    /* display: none; */
    .search-box,
    .notification-box {
      display: none;
    }

    //switch-box
    .switch-box {
      width: 140px;

      button {
        width: 70px;
        font-size: 12px;
      }
    }

    .menu-search-box {
      margin: 0 auto;
      min-width: 180px;
      max-width: max-content;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);

      input {
        font-size: 12px;

        &::placeholder {
          font-size: 12px;
        }
      }
    }

    .menu-notification-box {
      justify-content: center;
    }

    //menu
    .menu {
      background-color: blue !important;
    }

    .menu-button {
      margin-right: -3rem;
    }
    .menu,
    .menu-button {
      display: block;

      .icon {
        font-size: 2rem;
        color: #fff;
      }

      .menu-item {
        width: 220px;
        padding: 10px;
        margin: 1rem 1rem 10px 1rem;
      }
    }
  }
`;
