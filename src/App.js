import React, {useState} from "react";

import { render } from "react-dom";
import { Icon } from 'semantic-ui-react';
import tarotCards from './static/cards'
import { ThemeProvider } from "styled-components";
import {Container, JD} from './components'
import 'semantic-ui-css/semantic.min.css'
import lightTheme from "./themes/light";
import darkTheme from "./themes/dark";

const App = () => {
  const [isDark, setDark] = useState(true)
  const [isDweeb, setDweeb] = useState(true)
  const [cards] = useState(tarotCards)
  const [index, setIndex] = useState(2)
  const toggleTheme = () => setDark(!isDark)
  const toggleDweeb = () => setDweeb(!isDweeb)
  const card = cards[index]
  const urlName = card.name.replace(/\s+/g, '-').toLowerCase()

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
      <div className='p10 flex jcfe'>
        <Icon 
          className='pointer' 
          name={isDark ? 'hide' : 'unhide'} 
          onClick={toggleTheme} 
        />
        <Icon 
          className='pointer' 
          name={isDweeb ? 'unhide' : 'hide'} 
          onClick={toggleDweeb} 
        />
      </div>
      {isDweeb ? <JD /> : <JJ />}
      </Container>
    </ThemeProvider>
  );
}
render(React.createElement(App), document.getElementById("root"));
