import { AsyncStorage } from 'react-native'
import { starterDecks } from './starterData.js'

const DECK_STORAGE_KEY = "FlashCards:InitialDecks"


export const getDecks = () => {
  console.log("what returning from getdecks",AsyncStorage.getItem(DECK_STORAGE_KEY))
  return AsyncStorage.getItem(DECK_STORAGE_KEY)

}

export const setInitialData = () => {
  let initialData = starterDecks
  return AsyncStorage.setItem(DECK_STORAGE_KEY,JSON.stringify(initialData))

}


export const getDeck = (deckID) => {

}

export const saveDeckTitle = (title) => {

}

export const addCardToDeck = (deckTitle, card) => {

}
