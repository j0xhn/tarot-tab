import store from 'local-storage'
const default_key = 'tt_random'
const time_key = 'tt_last_check'
export const generateUID = () => {
  // I generate the UID from two parts here 
  // to ensure the random number provide enough bits.
  var firstPart = (Math.random() * 46656) | 0;
  var secondPart = (Math.random() * 46656) | 0;
  firstPart = ("000" + firstPart.toString(36)).slice(-3);
  secondPart = ("000" + secondPart.toString(36)).slice(-3);
  return firstPart + secondPart;
}

export const mapAirtableValues = values => values.map(value => ({
  ...value.fields,
  id: value.id,
  Record: value
}))

export function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export const generateRandomDeckNumber = (meta = {}) => {
  const {cardsInDeck = 78} = meta
  return Math.floor(Math.random()*cardsInDeck) + 1
}

export const getAppData = (meta = {}) => {
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
  const over24Hours = lastCheck
  if (exists && onceADay){
    return exists
  } else {
    const number = generateRandomDeckNumber()
    store.set(key, {
      number: number,
      orientation: !number % 2
    })
    return number
  }
}