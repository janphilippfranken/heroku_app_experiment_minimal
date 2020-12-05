import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'; //applyMiddleware is if we also need to use redux thunk for asynchronus actions
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import Layout from './containers/Layout';

import timerReducer from './store/reducers/timer';
import gamePhaseReducer from './store/reducers/gamePhase';
import conditionDataReducer from './store/reducers/conditionData';
import participantDataReducer from './store/reducers/participantData';
import generateToken from './utils/generate-token';

const participantToken = generateToken(5);

const rootReducer = combineReducers({
  timer: timerReducer,
  gamePhase: gamePhaseReducer,
  conditionData: conditionDataReducer,
  participantData: participantDataReducer,
  participantToken: () => participantToken
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
