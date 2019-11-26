import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  margin:0px  -4px -7px;
  width:102%;
`

const ImgWrapper = styled.div`
  text-align: center;
  margin-top: 3px;
  width:300px; /*container-width*/
  overflow: hidden; /*hide bounds of image */
  margin:0; /*reset margin of figure tag*/
  border-radius: 5px;
`

const Card = ({img, name, url, about}) => {
  return (
    <ImgWrapper>
      <StyledImg src={img} alt={name}/>
    </ImgWrapper>
  );
};

export default Card;
