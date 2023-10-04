import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseInit';
import { getFirestore } from 'firebase/firestore';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export {
  db,
  collection,
  doc,
  getDoc,
  setDoc,
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
};
