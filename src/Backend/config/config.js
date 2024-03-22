import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { get, getDatabase, ref, set } from "firebase/database";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAvyy3XmEics7XV0wVjPb8-PhOm7UiOiEo",
  authDomain: "turbo-livraison.firebaseapp.com",
  databaseURL: "https://turbo-livraison-default-rtdb.firebaseio.com",
  projectId: "turbo-livraison",
  storageBucket: "turbo-livraison.appspot.com",
  messagingSenderId: "569374590898",
  appId: "1:569374590898:web:d6904e0c3e8a374ddf86ab",
  measurementId: "G-EKYLK7NLX5"
};
const app = initializeApp(firebaseConfig);


// Constante pour realtime Database 
export const db = getDatabase(app);
//Constante pour authentification
export  const auth = getAuth(app);
export const  storage  = getStorage(app);









