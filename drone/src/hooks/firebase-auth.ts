import { toRefs, reactive } from 'vue';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import FIREBASE_CONFIG from './.env.firebase';

if (firebase.apps.length === 0) {
    firebase.initializeApp(FIREBASE_CONFIG);
}

type TState = {
    error: Error | null;
    user: firebase.auth.UserCredential | null | firebase.User;
    userData: any;
    initalized: boolean;
}

const state = reactive<TState>({
    user: null,
    error: null,
    userData: null,
    initalized: false
});

export default function () {
    const getUserData = async () => {
        const resp = await firebase
            .firestore()
            .collection('users')
            .doc(firebase.auth().currentUser?.uid)
            .get();

        if (resp.exists) {
            return {
                ...resp.data(),
                if: firebase.auth().currentUser?.uid
            }
        }
    };

    /**
     * 
     * @param username
     * @param password
     */
    const login = (username: string, password: string) => {
        return firebase
            .auth()
            .signInWithEmailAndPassword(username, password)
            .then(
                async (user) => {
                    state.error = null;
                    state.user = user;
                    state.userData = await getUserData();
                    return user;
                },
                (error) => {
                    state.error = error;
                    throw error;
                }
            )
            .catch((error) => {
                state.error = error;
                throw error;
            });
    };

    /**
     * 
     */
    const logout = () => {
        return firebase
            .auth()
            .signOut()
            .then(
                () => {
                    state.error = null;
                    state.user = null;
                    state.userData = null;
                },
                (error) => {
                    state.error = error;
                }
            )
            .catch((error) => {
                state.error = error;
            });
    };

    const authCheck = () => {
        return new Promise((resolve, reject) => {
            !state.initalized &&
                firebase.auth().onAuthStateChanged(async (_user) => {
                    if (_user) {
                        state.user = _user;
                        state.userData = await getUserData();
                    } else {
                        state.user = null;
                    }
                    state.initalized = true;
                    console.log(_user);
                    resolve(true);
                });
        });
    };

    return {
        ...toRefs(state),
        // Fonctions
        login,
        logout,
        authCheck
    };
}   