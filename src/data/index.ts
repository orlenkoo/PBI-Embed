import { initializeApp } from 'firebase/app'

export function initFirebase() {
  initializeApp({
    apiKey: 'AIzaSyC8eQYT48D3V2i2SaQsN3-st5OTPl8KpOM',
    authDomain: 'pbi-embed-4f33e.firebaseapp.com',
    databaseURL:
      'https://pbi-embed-4f33e-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'pbi-embed-4f33e',
    storageBucket: 'pbi-embed-4f33e.appspot.com',
    messagingSenderId: '687676915802',
    appId: '1:687676915802:web:ea08914e4fb9af9aa51863',
  })
}
