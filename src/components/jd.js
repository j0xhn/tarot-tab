import React from "react";

import { ThemeProvider } from "styled-components";

import cards from '../static/cards'
import lightTheme from '../themes/light'
import darkTheme from '../themes/dark'
import {Container, Description} from '../components'
import { generateRandomNumber } from '../utils'
import useUserData from '../context/userData'

import Card from "./Card";

const JD = ({isDark}) => {
  const [userData] = useUserData()
  console.log('userData: ', userData);
  const {cardIndex, cardOrientation} = userData
  // console.log('cardIndex: ', cardIndex);
  const orientationWord = cardOrientation > 0 ? 'up' : 'rev'
  const orientationKey = `meaning_${orientationWord}`
  const card = cards[cardIndex]
  // console.log('card: ', card);
  return card ? (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
          <div className='flex column aic'>
            <Card img={card.image} className='mb30'/>
            <Description>
              {card[orientationKey]}
              <span className='italic ml5 opacity5'>
                {`(${orientationWord})`}
              </span>
            </Description>
          </div>
      </Container>
    </ThemeProvider>
  ) : null
};

export default JD;
