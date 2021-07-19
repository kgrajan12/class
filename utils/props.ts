import React, { ReactElement } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
// component props
export type loadingScreenProp = {
    user: userState,
    navigation: NavigationScreenProp<any>
};
export type loginScreenProp = {};
export type dashboardScreenProp = {};

// custom component props
export type containerProp = (prop: {
    style: StyleProp<ViewStyle>
}) => View;

// mapStateToProps types
export type loadingStateToPropsType = (state: rootState) => loadingScreenProp;

// state props
export type rootState = {
    app: appState
};

// root state
export type appState = {
    user: userState
};

// app state
export type userState = {
    displayName: string | null;
    email: string | null;
    phoneNumber: string | null;
    photoURL: string | null;
    providerId: string;
    uid: string;
    providerData: (firebase.default.UserInfo | null)[],
    emailVerified: boolean,
    metaData: firebase.default.auth.UserMetadata,
    isAnonymous: boolean,
    refreshToken: string
};