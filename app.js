
const firebaseConfig = {
  apiKey: "AIzaSyBnrtX5rzyGtzfkqVuxhXEccmC1WxgUxsE",
  authDomain: "flightticketbooking-35580.firebaseapp.com",
  projectId: "flightticketbooking-35580",
  storageBucket: "flightticketbooking-35580.firebasestorage.app",
  messagingSenderId: "828504592232",
  appId: "1:828504592232:web:bec4c555c0e8d7fe4e10dd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// ...rest of your code (signup, login, etc.) stays the same


