import React from "react";

import { ThemeProvider } from "styled-components";

import cards from '../static/cards'
import lightTheme from '../themes/light'
import darkTheme from '../themes/dark'
import {Container, Description} from '../components'
import { generateRandomNumber } from '../utils'
import getUserData from '../context/userData'

import Card from "./Card";

const JD = ({isDark}) => {
  const userData = getUserData() || {}
  const {cardIndex, cardOrientation} = userData
  const orientationKey = 'meaning_' + (cardOrientation ? 'rev' : 'up')
  const card = cards[cardIndex]
  return card ? (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
          <div className='flex column aic'>
            <Card img={card.image} orientation={cardOrientation} className='mb30'/>
            <Description>
              {card[orientationKey]}
              <span className='italic ml5 opacity5'>
                {`(${cardOrientation ? 'rev' : 'up'})`}
              </span>
            </Description>
          </div>
      </Container>
    </ThemeProvider>
  ) : null
};

export default JD;
