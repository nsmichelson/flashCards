import { AsyncStorage } from 'react-native'
import { starterDecks } from './starterData.js'

const DECK_STORAGE_KEY = "FlashCards:Decks"


export const getDecks = () => {
//  console.log("what returning from getdecks",AsyncStorage.getItem(DECK_STORAGE_KEY))
  return AsyncStorage.getItem(DECK_STORAGE_KEY)

}

export const setInitialData = () => {
  let initialData = starterDecks
  return AsyncStorage.setItem(DECK_STORAGE_KEY,JSON.stringify(initialData))
}


export const getDeck = (deckID) => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
  .then((decks)=>{
    const parsedDecks = JSON.parse(decks)
    return parsedDecks[deckID]
  })
}

export const saveDeckTitle = (deckTitle) => {
  console.log("**********In the savedecktitle function, this is what we are saving", deckTitle)
  const newDeckObject =
      {[deckTitle]:{
        title:deckTitle,
        questions:[]
      }}
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(newDeckObject))
}


export const addCardToDeck = (deckTitle, cardObject) => {
  const selectedDeck = getDeck(deckTitle)
  selectedDeck = [...selectedDeck.questions,cardObject]

  AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(
    {[deckTitle]:selectedDeck}
  ))
  .then(()=>selectedDeck)
  .catch((err)=>{
    console.log("error is",error)
  })
}
