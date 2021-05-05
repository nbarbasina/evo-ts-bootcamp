import React from 'react';
import './App.css';
import { createStore, compose } from 'redux';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type BalanceAction = {
  type: string,
  payload: number,
}

export const UPDATE_BALANCE = 'updateBalance';
export const CREDIT = 'credit';
export const SUBTRACT_PERCENTAGE = 'subtractPercentage';
export const DEBIT = 'debit';

const balanceReducer = (balance: number = 100, action: BalanceAction) => {
  const { type, payload } = action;

  if (type === UPDATE_BALANCE) {
    const newbalance = payload;
    return newbalance;
  }

  if (type === CREDIT) {
    const newbalance = balance - payload;
    return newbalance;
  }

  if (type === SUBTRACT_PERCENTAGE) {
    const newbalance = balance - ((balance / 100) * payload);
    return newbalance;
  }

  if (type === DEBIT) {
    const newbalance = balance + payload;
    return newbalance;
  }

  return balance;
};

const actionArray: BalanceAction[] = [
  { type: 'UPDATE_BALANCE', payload: 1000.0 },
  { type: 'CREDIT', payload: 200.0 },
  { type: 'CREDIT', payload: 100.0 },
  { type: 'SET_BALANCE_WITH_TAX', payload: 14.0 },
  { type: 'DEBIT', payload: 250.0 },
  { type: 'UPDATE_BALANCE', payload: 1000.0 },
];

const balance = createStore(balanceReducer, undefined, composeEnhancers());

actionArray.forEach((action) => balance.dispatch(action));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello :)
        </p>
      </header>
    </div>
  );
}

export default App;
