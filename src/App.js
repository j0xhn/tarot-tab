import React, {useState} from "react";
import { render } from "react-dom";

import 'semantic-ui-css/semantic.min.css'
import { Icon } from 'semantic-ui-react';
import useUserData from './context/userData'
import {JD, JJ} from './components'

const App = () => {
  const [isDweeb] = useState(true)
  const [userData, setUserData] = useUserData()
  const { isDark } = userData;
  const toggleTheme = () => {
    setUserData({isDark: !isDark})
  }

  return (
    <>
      <div className='fixed top10 right10'>
        <Icon 
          className='pointer' 
          name={isDark ? 'unhide' : 'hide'} 
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
