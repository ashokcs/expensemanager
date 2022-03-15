import 'firebase/auth';
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

const config = {
    apiKey: "AIzaSyCesEs8-HKWyxbMt4fVZlx49zU_24fAlZw",
    authDomain: "expenseapp-de1e4.firebaseapp.com",
    projectId: "expenseapp-de1e4",
    storageBucket: "expenseapp-de1e4.appspot.com",
    messagingSenderId: "823544384312",
    appId: "1:823544384312:web:3a3c325be65c3389fc0fcd"
};

firebase.initializeApp(config);
export default firebase.firestore();
//export const app = initializeApp(firebaseConfig);
