import React from "react";
import styled from "styled-components";
import BottomHeader from "./BottomHeader";
import Cards from "./Cards";
import Header from "./Header";
import SideNav from "./SideNav";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <div className="side-nav">
        <SideNav />
      </div>
      <div className="content">
        <Header />
        <BottomHeader />
        <Cards />
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  display: flex;
  max-width: 100vw;
  overflow-x: hidden;

  .side-nav {
    flex: 0 0 5.7vw;
  }

  .content {
    flex: 1;
  }

  @media (max-width: 768px) {
  }
`;
