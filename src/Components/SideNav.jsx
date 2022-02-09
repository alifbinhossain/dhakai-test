import React from "react";
import styled from "styled-components";
import icons from "../Data/icons";
import logo from "../assets/images/sideNav/logo.svg";

const SideNav = () => {
  const topNavs = icons.filter((icon) => icon.category === "top");
  const bottomNavs = icons.filter((icon) => icon.category === "bottom");

  return (
    <SideNavContainer>
      <img className="logo" src={logo} alt="" />

      <div className="top-nav">
        {topNavs.map((nav, index) => (
          <a href="/" key={index}>
            <img src={nav.icon} alt="" />
          </a>
        ))}
      </div>

      <div className="bottom-nav">
        {bottomNavs.map((nav, index) => (
          <a href="/" key={index}>
            <img src={nav.icon} alt="" />
          </a>
        ))}
      </div>
    </SideNavContainer>
  );
};

export default SideNav;

const SideNavContainer = styled.aside`
  min-height: 100vh;
  background-color: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.06);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  //logo
  .logo {
    width: 38px;
  }

  //top-nav, bottom nav
  .top-nav,
  .bottom-nav {
    display: flex;
    flex-direction: column;

    a {
      display: block;
      margin-bottom: 15px;
    }
  }

  .bottom-nav {
    margin-bottom: 1rem;
  }
`;
