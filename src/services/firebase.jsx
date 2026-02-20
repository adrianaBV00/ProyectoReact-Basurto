// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, addDoc, getDocs, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHUwgTaCwswSazS_G0PDg67mDZBpOE_PM",
  authDomain: "ecommerce-react-3c223.firebaseapp.com",
  projectId: "ecommerce-react-3c223",
  storageBucket: "ecommerce-react-3c223.firebasestorage.app",
  messagingSenderId: "473899976238",
  appId: "1:473899976238:web:b62e61f2ab5db9913941bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);



export async function addProductFirebase (product={}){
    try{
        const docRef = await addDoc(collection(db, "kamiCollections"), product)
        console.log("Document written with ID: ", docRef.id);
    }catch(e){
        console.error("Error adding document: ", e)
    }
}



export async function getItems(){
    const querySnapshot = await getDocs(collection(db, 'kamiCollections'));
    querySnapshot.forEach(doc=> console.log(`${doc.id}=>${doc.data}`))
}