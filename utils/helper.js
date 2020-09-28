import { AsyncStorage } from 'react-native'
import { starterDecks } from './starterData.js'

const DECK_STORAGE_KEY = "FlashCards:Decks"


export const getDecks = () => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
  .then((result)=>{
      if(result===null){
        AsyncStorage.setItem(DECK_STORAGE_KEY,JSON.stringify(starterDecks))
      }
      return result === null ? starterDecks : JSON.parse(result)
          })
      }




export const setInitialData = () => {
  let initialData = starterDecks
  return AsyncStorage.setItem(DECK_STORAGE_KEY,JSON.stringify(initialData))
}

export async function getDeck(title) {
  try {
    const storageResults = await AsyncStorage.getItem(DECK_STORAGE_KEY);

    return JSON.parse(storageResults)[title];
  } catch (error) {
    console.log(error);
  }
}

export const saveDeckTitle = (deckTitle) => {
  const newDeckObject =
      {[deckTitle]:{
        title:deckTitle,
        questions:[]
      }}
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(newDeckObject))
}


export const getStarted = async () => {
  const qToAdd = {
    question: 'Boom?',
    answer: 'Boomba Boom'
  }
  try {
    return saveDeckTitle('Boooom')
    .then(addCardToDeck('Boooom',qToAdd))
  }
  catch(e){
    console.log("Error is",e)
  }
}


export const addCardToDeck = (key, values) => {
      return AsyncStorage.getItem(DECK_STORAGE_KEY)

            .then((results) =>{
              return JSON.parse(results)

            })
            .then( (results) => {
                results[key].questions.push(values)
                return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(results))
            })

          }
