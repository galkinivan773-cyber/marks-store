import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyACYzdq_7A4v9xoVqIgL7euA2UvfzfI0lI",
  authDomain: "marks-store-13c0a.firebaseapp.com",
  projectId: "marks-store-13c0a",
  storageBucket: "marks-store-13c0a.firebasestorage.app",
  messagingSenderId: "843845829558",
  appId: "1:843845829558:web:e7717f00ae57d10f7ff717"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// делаем доступным глобально
window.db = db;
window.firestore = {
  collection,
  addDoc,
  getDocs
};
