import React from "react";

// Redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "store";
import AppNavigator from 'AppNavigator';

function App() {
  const { persistor, store } = configureStore();

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
