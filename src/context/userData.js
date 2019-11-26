import React, {useState, useEffect} from 'react'
import {generateUID, generateRandomDeckNumber} from '../utils'
import store from 'local-storage'
export const LS_KEY = 'tt_data'
export default () => {
  let appData = store.get(LS_KEY) || {}
  console.log('appData: ', appData);
  const [data, setData] = useState(appData)
  console.log('data: ', data);

  useEffect(()=>{
    console.log('useEffect')
    const randomNumber = generateRandomDeckNumber()
    const oneday = 60 * 60 * 24 * 1000
    const today = Date.now()
    const dayInPast = today - oneday
    const hasReadInPast24Hours = (dayInPast < data.lastReading)
    console.log('hasReadInPast24Hours: ', hasReadInPast24Hours);
    if (!hasReadInPast24Hours) {
      let uid = data.uid
      if (!uid) {
        uid = generateUID()
      }
      const cardIndex = randomNumber
      const cardOrientation = !randomNumber % 2 
      console.log('setting', {uid, cardIndex, cardOrientation, today})
      store.set(LS_KEY, {uid, cardIndex, cardOrientation, lastReading: today})
    } else {
      console.log('read in past 24:', data)
    }
  },[])

  return data
}