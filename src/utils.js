import store from 'local-storage'
const key = 'tt_entropy'
export const getRandomNumber = (meta = {}) => {
  const {onceADay = true} = meta
  const exists = store.get(key)
  if (exists && onceADay){
    return exists
  } else {
    const number = Math.floor(Math.random()*78) + 1
    store.set(key, number)
    return number
  }
}