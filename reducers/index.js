import { RECEIVE_DECKS, ADD_QUESTION, ADD_DECK, REMOVE_DECK, RESET } from '../actions/'

export default function deckReducer (state={},action){
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
     case ADD_QUESTION:
       const { question, deckTitle } = action;
        return {
          ...state,
          [deckTitle]:{
            ...state[deckTitle],
            questions:[...state[deckTitle].questions,
                          ...question]
                        }
               }
     case ADD_DECK:
      const { deckID } = action
        return {
          ...state,
          [deckID]:{
            title:deckID,
            questions:[]
          }
        }

      default:
        return state;
  }
}
