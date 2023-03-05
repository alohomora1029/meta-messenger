import React from 'react';
import Pusher from "pusher";
import ClientPusher from "pusher-js"; 


  export const serverPusher = new Pusher({
    appId: "1556682",
    key: "ccbba182abf09ff1ad1d",
    secret: "b290c55799c71ecf80e0",
    cluster: "ap3",
    useTLS: true,
  
})

export const clientPusher = new ClientPusher('ccbba182abf09ff1ad1d', {
  cluster: 'ap3',
  forceTLS:true,
});