import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  margin:0px  -4px -7px;
  width:102%;
  transform: ${props => `scale(${props.orientation}, ${props.orientation})`};
  filter: grayscale(60%);
`

const ImgWrapper = styled.div`
  text-align: center;
  margin-top: 3px;
  width:300px; /*container-width*/
  overflow: hidden; /*hide bounds of image */
  border-radius: 5px;
`

const Card = ({img, name, orientation, ...others}) => {
  return (
    <ImgWrapper {...others}>
      <StyledImg src={img} alt={name} orientation={orientation} />
    </ImgWrapper>
  );
};

export default Card;
