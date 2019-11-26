import React, {useState} from "react";
import { render } from "react-dom";

import 'semantic-ui-css/semantic.min.css'
import { Icon } from 'semantic-ui-react';
import {JD, JJ} from './components'

const App = () => {
  const [isDark, setDark] = useState(false)
  const [isDweeb, setDweeb] = useState(true)
  const toggleTheme = () => setDark(!isDark)
  const toggleDweeb = () => setDweeb(!isDweeb)

  return (
    <>
      <div className='fixed top10 right10'>
        <Icon 
          className='pointer' 
          name={isDark ? 'hide' : 'unhide'} 
          onClick={toggleTheme} 
        />
        {/* <Icon 
          className='pointer' 
          name={isDweeb ? 'unhide' : 'hide'} 
          onClick={toggleDweeb} 
        /> */}
      </div>
      {isDweeb ? <JD isDark={isDark} /> : <JJ isDark={isDark} />}
    </>
  );
}
render(React.createElement(App), document.getElementById("root"));
