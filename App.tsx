import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { onInit } from './src/onInit';
import AppContainer from './src';
import { navigationRef } from './src/navigation';
import { persistor, store } from './src/store';

// all initial scripts are run in onInit();
onInit();

export default () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppContainer ref={navigationRef} />
      </PersistGate>
    </Provider>
  );
}
