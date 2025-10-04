import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBJBx15uh5yPxThWJbysChIRQpC1t8ceCg",
  authDomain: "netflix-clone-601d6.firebaseapp.com",
  projectId: "netflix-clone-601d6",
  storageBucket: "netflix-clone-601d6.firebasestorage.app",
  messagingSenderId: "640000882445",
  appId: "1:640000882445:web:b4e9038d9a222168a76244"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (name, email, password)=>{
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"),{
      uid: user.uid,
      name,
      authProvider: "local",
      email,

    })
  }catch(error){
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));

  }

}

const login = async (email, password)=>{
  try {
    await signInWithEmailAndPassword(auth, email, password);

  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
    
  }
}

const logout = ()=>{
  signOut(auth);
}

export {auth, db, login, signup, logout};