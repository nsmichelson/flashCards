export const RECEIVE_DECKS = "RECEIVE_DECKS"
export const ADD_QUESTION = "ADD_QUESTION"

export function receiveDecks (decks){
  return {
    type:RECEIVE_DECKS,
    decks
  }
}

export function ADD_QUESTION(question){
  return {
    type:ADD_QUESTION,
    question
  }
}
