import store from 'local-storage'
const default_key = 'tt_random'
const time_key = 'tt_last_check'
export const getRandomNumber = (meta = {}) => {
  const {
    onceADay = true,
    customKey
  } = meta
  const key = customKey 
    ? 'tt_' + customKey 
    : default_key

  const exists = store.get(key)
  const lastCheck = store.get(time_key)
  var currentTime = new Date();
  console.log('currentTime: ', currentTime);
  const over24Hours = customKey
  if (exists && onceADay){
    return exists
  } else {
    const number = Math.floor(Math.random()*78) + 1
    store.set(key, number)
    return number
  }
}