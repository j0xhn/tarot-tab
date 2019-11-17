import React from "react";

import { ThemeProvider } from "styled-components";

import Card from "./card";
import lightTheme from '../themes/jj_light'
import darkTheme from '../themes/jj_dark'
import {Container, Description} from '../components'

const imageUrl = "https://gfx.tarot.com/images/site/decks/hermetic/full_size/0.jpg"

const JJ = ({isDark}) => {
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
        <div className="Aligner column">
          <div className="Aligner">
            <Card
              img={imageUrl}
            />
            <Description>fuck off</Description>
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default JJ;
