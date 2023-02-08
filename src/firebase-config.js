// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAI3QgfAwjZ1tN9lXOYYyidbCzcsfPeYEM",
    authDomain: "cosmobar-35585.firebaseapp.com",
    projectId: "cosmobar-35585",
    storageBucket: "cosmobar-35585.appspot.com",
    messagingSenderId: "366899036637",
    appId: "1:366899036637:web:2ccfdda1f932ca27b7b634",
    measurementId: "G-FLVD22XMF1"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const db = getFirestore()