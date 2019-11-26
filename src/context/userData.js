import React, {useState, useEffect} from 'react'
import {generateUID, generateRandomDeckNumber} from '../utils'
import store from 'local-storage'
export const LS_KEY = 'tt_data'
export default () => {
  let appData = store.get(LS_KEY) || {}
  const [data, setData] = useState(appData)

  useEffect(()=>{
    const randomNumber = generateRandomDeckNumber()
    const oneday = 60 * 60 * 24 * 1000
    const today = Date.now()
    const dayInPast = today - oneday
    const hasReadInPast24Hours = (dayInPast < data.lastReading)
    if (!hasReadInPast24Hours) {
      let uid = data.uid
      if (!uid) {
        uid = generateUID()
      }
      const cardIndex = randomNumber
      const cardOrientation = randomNumber % 2 ? 1 : -1
      const newData = {
        uid, 
        cardIndex, 
        cardOrientation, 
        lastReading: today
      }
      store.set(LS_KEY, newData)
      setData(newData)

    } else {
      // console.log('read in past 24:', data)
    }
  },[])

  return data
}