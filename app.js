// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// Your Firebase configuration (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyCH81xSjRDP6WFNjcjj77j68rEz1erf1Fw",
  authDomain: "blooddonationsystem-bf877.firebaseapp.com",
  projectId: "blooddonationsystem-bf877",
  storageBucket: "blooddonationsystem-bf877.firebasestorage.app",
  messagingSenderId: "297033049797",
  appId: "1:297033049797:web:89a2aaf80cc4cd908f72ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Form submission
document.getElementById('registrationForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const bloodGroup = document.getElementById('bloodGroup').value;
    const willing = document.querySelector('input[name="willing"]:checked').value;
    try {
        const docRef = await addDoc(collection(db, "users"), {
          name,
          phone,
          email,
          password,
          bloodGroup, 
          willingToDonate: willing,
          createdAt: new Date()
        });
        alert("User registered with ID: " + docRef.id);
        document.getElementById('registrationForm').reset();
    } catch (error) {
        console.error("Error adding document: ", error);
        alert("Error registering user");
    }
});