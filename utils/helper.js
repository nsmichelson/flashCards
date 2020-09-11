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
  const newDeckObject =
      {[deckTitle]:{
        title:deckTitle,
        questions:[]
      }}
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(newDeckObject))
}


export const addCardToDeck = async (deckTitle, cardObject) => {
  return getDeck(deckTitle)
  .then((selectedDeck)=> {
    selectedDeck = {...selectedDeck,
      ["questions"]: [...selectedDeck.questions,cardObject]
    }
    console.log("!!!!!!!!!!!!!!! here is the selected deck object",selectedDeck)
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(
      {[deckTitle]:selectedDeck}
    ))
  })
  .then(()=>getDeck(deckTitle))
  .then((deck)=>{
    console.log("DECK DECK DECK:",deck)
    })
  }
