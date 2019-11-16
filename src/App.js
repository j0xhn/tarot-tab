import React, {useState} from "react";

import { render } from "react-dom";
import { Icon } from 'semantic-ui-react';
import tarotCards from './static/cards'
import { ThemeProvider } from "styled-components";
import {Card, Container} from './components'
import 'semantic-ui-css/semantic.min.css'
import lightTheme from "./themes/light";
import darkTheme from "./themes/dark";

const App = () => {
  const [isDark, setDark] = useState(true)
  const [cards] = useState(tarotCards)
  const [index, setIndex] = useState(2)
  const toggleTheme = () => setDark(!isDark)
  const card = cards[index]
  console.log('card: ', card);
  const urlName = card.name.replace(/\s+/g, '-').toLowerCase()
  console.log('urlName: ', urlName);

  const imageUrl = `https://www.biddytarot.com/wp-content/uploads/2018/06/ET-PENTACLES-06.jpg`
    return (
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Container>
        <div className='p10 flex jcfe'>
          <Icon 
            className='pointer' 
            name={isDark ? 'hide' : 'unhide'} 
            onClick={toggleTheme} 
          />
        </div>
          <div className="Aligner column">
            <div className="Aligner">
              <Card
                name="Card 4"
                url="https://www.instagram.com/"
                about="social media"
                img={imageUrl}
              />
            </div>
          </div>
        </Container>
      </ThemeProvider>
    );
  }
render(React.createElement(App), document.getElementById("root"));
