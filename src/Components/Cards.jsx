import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import ShopCard from "./ShopCard";
import InfiniteScroll from "react-infinite-scroll-component";

const Cards = () => {
  const skip = 0;
  const token = JSON.parse(localStorage.getItem("token"));
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(8);
  const [count, setCount] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  if (count === limit) {
    setHasMore(false);
  }

  //get the manufactures data from the given api
  useEffect(() => {
    setLoading(true);
    if (token.length) {
      fetch(
        `https://devapi.dhakai.com/api/v2/manufacturers?skip=${skip}&&limit=${limit}`,
        {
          headers: {
            Authorization: token,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setCount(data.result.count);
          const manufacturers = data.result.manufacturers;
          setData(manufacturers);

          setTimeout(() => {
            setLoading(false);
          }, 500);
        });
    }
  }, [token, limit]);

  return (
    <CardsContainer>
      <InfiniteScroll
        style={{ overflowX: "hidden", minHeight: "220vh" }}
        dataLength={data.length}
        next={() => {
          setLimit(limit + 8);
        }}
        hasMore={hasMore}
      >
        <Row xs={1} sm={2} md={4} className="g-4">
          {data.map((obj, index) => (
            <Col key={index}>{<ShopCard obj={obj} loading={loading} />}</Col>
          ))}
        </Row>
      </InfiniteScroll>
    </CardsContainer>
  );
};

export default Cards;

const CardsContainer = styled.section`
  padding: 2rem 4rem;
  background-color: #f2f2f2;
  overflow-y: scroll;

  @media (max-width: 768px) {
    padding: 0.5rem 0.5rem 0.5rem 4rem;
  }
`;
