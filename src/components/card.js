import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  background: ${props => props.theme.colors.cardBackground};
  padding: 24px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  min-height: 100px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  font-size: 24px;
  font-family: sans-serif;
`;

const Card = ({img, name, url, about}) => {
  return (
    <StyledCard>
      <h1>{name}</h1>
      <h2>{url}</h2>
      <h2>{about}</h2>
      hi
      <img src={img} alt=""/>
    </StyledCard>
  );
};

export default Card;
