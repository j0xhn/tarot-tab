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

const StyledImg = styled.img`
  margin:0px  -4px -4px;
  width:102%;
`

const ImgWrapper = styled.div`
  text-align: center;
  margin-top: 3px;
  width:200px; /*container-width*/
  overflow: hidden; /*hide bounds of image */
  margin:0; /*reset margin of figure tag*/
  border-radius: 5px;
`

const Card = ({img, name, url, about}) => {
  return (
    <StyledCard>
      <ImgWrapper>
        <StyledImg src={img} alt={name}/>
      </ImgWrapper>
    </StyledCard>
  );
};

export default Card;
