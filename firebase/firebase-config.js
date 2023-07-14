import { initializeApp } from "firebase/app";
import { getDatabase, connectDatabaseEmulator } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyC3mud0vr1DvRZ6e6K1_I0A_Gp4jKObjbM",
  authDomain: "curriculum-tool-e63de.firebaseapp.com",
  databaseURL: "https://curriculum-tool-e63de-default-rtdb.firebaseio.com",
  projectId: "curriculum-tool-e63de",
  storageBucket: "curriculum-tool-e63de.appspot.com",
  messagingSenderId: "1051665279579",
  appId: "1:1051665279579:web:961c5c68ee55237320ad7e",
  measurementId: "G-3EZ220DMLF"
};

export const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)
connectDatabaseEmulator(db, "127.0.0.1", 9000)