import React from 'react'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'
import { View, StyleSheet, AsyncStorage } from 'react-native'

const NOTIFICATION_KEY = "FlashCards:notifications"

function createNotification () {
  return {
    title:"Study today!",
    body: "Don't forget to do your studying today!",
    ios:{
      sound:true,
    },
    android:{
      sound:true,
      priority:'high',
      sticky:false,
      vibrate:true,
    }
  }
}

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data)=>{
      if(data===null){
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then( ({status}) => {
            if (status==='granted'){
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate()+1)
              tomorrow.setHours(8)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time:tomorrow,
                  repeat:'day'
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY,JSON.stringify(true))
            }
          })
      }
    })
  }
