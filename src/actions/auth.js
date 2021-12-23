import { types } from '../types/types';
import { firebase } from '../firebase/firebase-config';

export const login = () => {
    return {
        type: types.login
    }
}

export const logOut = () => {
    return {
        type: types.logout
    }
}

export const startLogout = () => {
    return async ( dispatch ) => {
        await firebase.auth().signOut();
        dispatch( logOut() );
    }
}
