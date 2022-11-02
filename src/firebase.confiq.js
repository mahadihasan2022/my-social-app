import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-mcd7LXCEL49E4BGOmyK1SnwIZx-Abko",
  authDomain: "social-app-ce54d.firebaseapp.com",
  projectId: "social-app-ce54d",
  storageBucket: "social-app-ce54d.appspot.com",
  messagingSenderId: "882066686706",
  appId: "1:882066686706:web:28b8b919c7aa1f8d5c066b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;