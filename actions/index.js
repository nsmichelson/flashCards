import { getDecks } from '../utils/helper.js'

export const RECEIVE_DECKS = "RECEIVE_DECKS"
export const ADD_QUESTION = "ADD_QUESTION"
export const ADD_DECK = "ADD_DECK"
export const REMOVE_DECK = "REMOVE_DECK"
export const RESET = "RESET"


export function receiveDecks (decks){
  return {
    type:RECEIVE_DECKS,
    decks
  }
}

export function addQuestion(question, deckTitle){
  return {
    type:ADD_QUESTION,
    question,
    deckTitle
  }
}

export function addDeck (deckID){
  return {
    type:ADD_DECK,
    deckID
  }
}

export function removeDeck (deckTitle){
  return {
    type:REMOVE_DECK,
    deckTitle
  }
}

export function reset () {
  return {
    type:RESET
  }
}

export function handleInitialData(){
  return dispatch => {
    return getDecks()
      .then((decks)=>{
        dispatch(receiveDecks(decks))
      })
    }
  }
