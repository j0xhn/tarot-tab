import React, {useState, useEffect} from 'react'
import {generateUID, generateRandomDeckNumber, isToday} from '../utils'
import store from 'local-storage'
export const LS_KEY = 'tt_data'
export default () => {
  // check if data is stored in local cache, set as default data
  let cache = store.get(LS_KEY) || {}
  const [data, setData] = useState(cache)

  const handleSetData = (incomingData) => {
    const localData = store.get(LS_KEY) || data
    const dataToSet = {
      ...localData,
      ...data,
      ...incomingData
    }
    // console.log('3. setting: ', dataToSet, localData, data, incomingData);
    console.log('3. setting: ', dataToSet);
    store.set(LS_KEY, dataToSet)
    setData(dataToSet)
  }

  useEffect(()=>{
    let {uid, cardIndex, lastReading } = store.get(LS_KEY) || {} 
    // for some reason the data isn't getting read from store in time from the first set,
    // so reading from local storage instead
    const hasReadInPast24Hours = isToday(lastReading)
    console.log('2. state: ', cardIndex, !hasReadInPast24Hours, lastReading);
    if (!hasReadInPast24Hours) {
      console.log('2. generating new')
      if (!uid) { uid = generateUID() }
      const cardIndex = generateRandomDeckNumber()
      const cardOrientation = cardIndex % 2 
        ? 1 
        : -1
      const newData = {
        uid, 
        isDark: false,
        cardIndex,
        cardOrientation, 
        lastReading:  Date.now()
      }
      handleSetData(newData)
    }
  },[data])
  // console.log('1. return', data)
  return [data, handleSetData]
}