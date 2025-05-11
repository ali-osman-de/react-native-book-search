import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationRoute from './src/navigation/NavigationRoute';
import { Provider } from 'react-redux';
import { store } from './src/store/store';


export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigationRoute />
      </NavigationContainer>
    </Provider>
  );
}
