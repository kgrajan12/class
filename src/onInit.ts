import firebase from "firebase";
import { firebaseConfig } from "utils/config";
import { store } from "./store";
import { login } from "./store/actions";

export const onInit = () => {
    firebase.apps.length == 0 && firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(user => {
        user && store.dispatch(login(user));
    });
}