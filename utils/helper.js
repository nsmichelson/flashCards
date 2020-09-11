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

export async function getDeck(id) {
  try {
    const storeResults = await AsyncStorage.getItem(DECK_STORAGE_KEY);

    return JSON.parse(storeResults)[id];
  } catch (err) {
    console.log(err);
  }
}

// export const getDeck = (deckID) => {
//   return AsyncStorage.getItem(DECK_STORAGE_KEY)
//   .then((decks)=>{
//     const parsedDecks = JSON.parse(decks)
//     return parsedDecks[deckID]
//   })
// }

export const saveDeckTitle = (deckTitle) => {
  const newDeckObject =
      {[deckTitle]:{
        title:deckTitle,
        questions:[]
      }}
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(newDeckObject))
}


export const addCardToDeck = async (key, values) => {
    try{
        return await AsyncStorage.getItem(DECK_STORAGE_KEY)
            .then(results => JSON.parse(results))
            .then( results => {
                results[key].questions.push(values)
                AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(results))
                return results
            })

    }catch(e){
        console.log("Error saving card: ", e)
    }
}



// export async function addCardToDeck(title, card) {
//   try {
//     const deck = await getDeck(title);
//
//     await AsyncStorage.mergeItem(
//       DECK_STORAGE_KEY,
//       JSON.stringify({
//         [title]: {
//           questions: [...deck.questions].concat(card)
//         }
//       })
//     );
//   } catch (err) {
//     console.log(err);
//   }
// }



// export const addCardToDeck = (deckTitle, cardObject) => {
//     return AsyncStorage.getItem(DECK_STORAGE_KEY).then(stringifiedDecks => {
//         let decks = JSON.parse(stringifiedDecks);
//         let deckKeys = Object.keys(decks);
//
//         deckKeys.forEach(deckKey => {
//             let deck = decks[deckKey];
//             if(deck.title === deckTitle)
//                 deck.questions = [...deck.questions, cardObject]
//         });
//         let stringifiedUpdatedDecks = JSON.stringify(decks)
//         AsyncStorage.setItem(DECK_STORAGE_KEY, stringifiedUpdatedDecks).catch(err => console.log(err))
//         return Object.values(decks)
//     }).catch(err => console.log(err))
// }
