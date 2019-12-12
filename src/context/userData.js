import React, {useState, useEffect} from 'react'
import {generateUID, generateRandomDeckNumber, isToday} from '../utils'
import store from 'local-storage'
export const LS_KEY = 'tt_data'
export default () => {
  let cache = store.get(LS_KEY) || {}
  const [data, setData] = useState(cache)

  const handleSetData = (incomingData) => {
    const localData = store.get(LS_KEY) || data
    const dataToSet = {
      ...localData,
      ...data,
      ...incomingData
    }
    console.log('3. setting: ', dataToSet, localData, data, incomingData);
    setData(dataToSet)
    store.set(LS_KEY, dataToSet)
  }

  useEffect(()=>{
    const randomNumber = generateRandomDeckNumber()
    const oneday = 60 * 60 * 24 * 1000
    const today = Date.now()
    const hasReadInPast24Hours = isToday(data.lastReading)
    let { uid, cardIndex } = data
    console.log('2. state: ', data);
    if (!hasReadInPast24Hours) {
      // console.log(' not in 24', data)
      if (!uid) { uid = generateUID() }
      if (!cardIndex) { cardIndex = randomNumber }
      const cardOrientation = randomNumber % 2 ? 1 : -1
      const newData = {
        uid, 
        isDark: false,
        cardIndex, 
        cardOrientation, 
        lastReading: today
      }
      handleSetData(newData)
      // store.set(LS_KEY,)
      // setData(newData)
    } else {
      // console.log('in past 24:', data)
    }
  },[data])
  console.log('1. return', data)
  return [data, handleSetData]
}