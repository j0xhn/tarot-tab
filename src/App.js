import React, {useState} from "react";

import { render } from "react-dom";
import { Button, Icon, Dropdown } from 'semantic-ui-react'
import { ThemeProvider } from "styled-components";
// import {Container, Card} from './components'
import 'semantic-ui-css/semantic.min.css'
import lightTheme from "./themes/light";
import Card from './components/card'

const options = [
  { key: 'light', text: 'light', icon: 'lightbulb' },
  { key: 'dark', text: 'dark', icon: 'lightbulb-slash' },
  { key: 'psychedelic', text: 'psychedelic', icon: 'poo-storm' },
]

const App = () => {
  const [theme, setTheme] = useState(true)
  const toggleTheme = () => setTheme(!theme)
// class App extends React.Component {

//   render() {
    return (
      <ThemeProvider theme={lightTheme}>
    {/* <Container> */}
      <div className='p10 flex jcfe'>
        <Icon name={theme ? 'hide' : 'unhide'} onClick={toggleTheme} />
      {/* <Dropdown
        trigger={<Icon name='unhide'/>}
        options={options}
        pointing='top left'
        icon={null}
      /> */}
       {/* <Button.Group>
          <Button>Light</Button>
          <Button.Or />
          <Button color='black'>Dark</Button>
          <Button.Or />
          <Button color='teal'>Psychic</Button>
        </Button.Group> */}
      </div>
      <div className="Aligner column">
        <div className="Aligner">
          <Card
            name="Card 4"
            url="https://www.instagram.com/"
            about="social media"
          />
        </div>
      </div>
      {/* </Container> */}
      </ThemeProvider>
    );
  }
render(React.createElement(App), document.getElementById("root"));
