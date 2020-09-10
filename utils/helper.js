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
    console.log("this is what we got for decks",decks)
    const parsedDecks = JSON.parse(decks)
    console.log("parsed decks are", parsedDecks)
    console.log("THIS IS THE DECK TO RETRIEVE!!!!!!!!!",parsedDecks[deckID])
    return parsedDecks[deckID]
})
}

export const saveDeckTitle = (deckTitle) => {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(
    {[deckTitle]:{
      title:deckTitle,
      questions:[]
    }}
  ))
  .then(()=>deckTitle)
  .catch((err)=>{
    console.log("error is:",error)
  })
}


export const addCardToDeck = (deckTitle, cardObject) => {
  const selectedDeck = getDeck(deckTitle)
  selectedDeck = [...selectedDeck.questions,cardObject]

  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(
    {[deckTitle]:selectedDeck}
  ))
  .then(()=>selectedDeck)
  .catch((err)=>{
    console.log("error is",error)
  })
}
