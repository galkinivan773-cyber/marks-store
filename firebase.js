firebase.initializeApp({
  apiKey: "AIzaSyACYzdq_7A4v9xoVqIgL7euA2UvfzfI0lI",
  authDomain: "marks-store-13c0a.firebaseapp.com",
  projectId: "marks-store-13c0a",
  storageBucket: "marks-store-13c0a.firebasestorage.app",
  messagingSenderId: "843845829558",
  appId: "1:843845829558:web:e7717f00ae57d10f7ff717"
});

const db = firebase.firestore();

window.db = db;

// 🔥 ДИАГНОСТИКА
console.log("Firebase OK");
