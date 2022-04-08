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
    loading: boolean;
    user: firebase.auth.UserCredential | null | firebase.User;
    userData: any;
    initalized: boolean;
}

const state = reactive<TState>({
    user: null,
    loading: true,
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
        state.loading = true;
        return firebase
            .auth()
            .signInWithEmailAndPassword(username, password)
            .then(
                async (user) => {
                    state.error = null;
                    state.loading = false;
                    state.user = user;
                    state.userData = await getUserData();
                    return user;
                },
                (error) => {
                    state.error = error;
                    state.loading = false;
                    throw error;
                }
            )
            .catch((error) => {
                state.error = error;
                state.loading = false;
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
                    state.loading = false;
                    state.user = null;
                    state.userData = null;
                },
                (error) => {
                    state.error = error;
                    state.loading = false;
                }
            )
            .catch((error) => {
                state.error = error;
                state.loading = false;
            });
    };

    const authCheck = () => {
        return new Promise((resolve, reject) => {
            state.loading = true;
            !state.initalized &&
                firebase.auth().onAuthStateChanged(async (_user) => {
                    if (_user) {
                        state.user = _user;
                        state.userData = await getUserData();
                    } else {
                        state.user = null;
                    }
                    state.loading = false;
                    state.initalized = true;
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