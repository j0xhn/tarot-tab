import React from "react";

import { ThemeProvider } from "styled-components";

import cards from '../static/cards'
import lightTheme from '../themes/light'
import darkTheme from '../themes/dark'
import {Container, Description} from '../components'
import { generateRandomNumber } from '../utils'
import getUserData from '../context/userData'

import Card from "./card";

const JD = ({isDark}) => {
  const userData = getUserData() || {}
  const {cardIndex = 0} = userData
  const card = cards[cardIndex]
  console.log('card: ', cards.length, cardIndex);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
          <div>
            <Card img={card.image} />
            <Description>car</Description>
          </div>
      </Container>
    </ThemeProvider>
  );
};

export default JD;
