import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBHsC8pJmPJ_m_HAk5td4j95GcaHWtI4IU",
    authDomain: "react-b356e.firebaseapp.com",
    projectId: "react-b356e",
    storageBucket: "react-b356e.appspot.com",
    messagingSenderId: "979271638332",
    appId: "1:979271638332:web:9184084f2c591ffcc05239",
    measurementId: "G-PJ8ZK0LS8B"
};


const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
