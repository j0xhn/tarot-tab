import store from 'local-storage'
const default_key = 'tt_random'
export const getRandomNumber = (meta = {}) => {
  const {
    onceADay = true,
    customKey
  } = meta
  const key = customKey 
    ? 'tt_' + customKey 
    : default_key

  const exists = store.get(key)
  if (exists && onceADay){
    return exists
  } else {
    const number = Math.floor(Math.random()*78) + 1
    store.set(key, number)
    return number
  }
}