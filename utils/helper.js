import { AsyncStorage } from 'react-native'
import { starterDecks } from './starterData.js'

const DECK_STORAGE_KEY = "FlashCards:Decks"


export const getDecks = () => {
  console.log("RUNNING GET DECKS")
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


export const addCardToDeck = (deckTitle, cardObject) => {
    return AsyncStorage.getItem(DECK_STORAGE_KEY).then(stringifiedDecks => {
        let decks = JSON.parse(stringifiedDecks);
        let deckKeys = Object.keys(decks);

        deckKeys.forEach(deckKey => {
            let deck = decks[deckKey];
            if(deck.title === deckTitle)
                deck.questions = [...deck.questions, cardObject]
        });
        let stringifiedUpdatedDecks = JSON.stringify(decks)
        AsyncStorage.setItem(DECK_STORAGE_KEY, stringifiedUpdatedDecks).catch(err => console.log(err))
        return Object.values(decks)
    }).catch(err => console.log(err))
}
