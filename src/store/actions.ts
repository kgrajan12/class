import { LOGIN } from "./type";

export const login = (user: firebase.default.User) => ({
    type: LOGIN,
    user: {
        displayName: user.displayName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL,
        providerId: user.providerId,
        uid: user.uid,
        providerData: user.providerData,
        emailVerified: user.emailVerified,
        metaData: user.metadata,
        isAnonymous: user.isAnonymous,
        refreshToken: user.refreshToken
    }
});