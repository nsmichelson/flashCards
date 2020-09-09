import { AsyncStorage } from 'react-native'
import { starterDecks } from './starterData.js'

const DECK_STORAGE_KEY = "FlashCards:InitialDecks"


export const getDecks = () => {
  console.log("In the get decks function now")
  AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results)=>{
      console.log("these are the results from getdecks",results)
      return JSON.parse(results)
    })
//  return AsyncStorage.getItem(DECK_STORAGE_KEY)
//    .then(JSON.parse(results))

}

export const setInitialData = () => {
  let initialData = starterDecks
  console.log("in the setinitialdata helper function now", initialData)

  AsyncStorage.setItem(DECK_STORAGE_KEY,JSON.stringify(initialData),getDecks)

}



export const setAndGetData = () => {
  setInitialData()
  return getDecks()
}

export const getDeck = (deckID) => {

}

export const saveDeckTitle = (title) => {

}

export const addCardToDeck = (deckTitle, card) => {

}
