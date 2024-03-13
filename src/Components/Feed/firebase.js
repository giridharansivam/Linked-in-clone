import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCgGaSYNS9nLhhe__y05xgZucZ6FeOxSf4",
  authDomain: "linked-in-clone-664c8.firebaseapp.com",
  projectId: "linked-in-clone-664c8",
  storageBucket: "linked-in-clone-664c8.appspot.com",
  messagingSenderId: "806742666423",
  appId: "1:806742666423:web:7f5d56f4748fe9368b7132"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'posts');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}
export { db,auth}





  