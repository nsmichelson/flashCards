import { AsyncStorage } from 'react-native'
import { starterDecks } from './starterData.js'

const DECK_STORAGE_KEY = "FlashCards:Decks"


export const getDecks = () => {
  console.log("what returning from getdecks",AsyncStorage.getItem(DECK_STORAGE_KEY))
  return AsyncStorage.getItem(DECK_STORAGE_KEY)

}

export const setInitialData = () => {
  let initialData = starterDecks
  return AsyncStorage.setItem(DECK_STORAGE_KEY,JSON.stringify(initialData))
}


export const getDeck = (deckID) => {
  return JSON.parse(AsyncStorage.getItem(DECK_STORAGE_KEY)).deckID

}

export const saveDeckTitle = (deckObject) => {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(
    {[deckObject.title]:deckObject}
  ))
  .then(()=>deckObject)
  .catch((err)=>{
    console.log("error is:",error)
  })
}


export const addCardToDeck = (deckTitle, card) => {

}
