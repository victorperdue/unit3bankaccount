// import TransactionHistory from "../features/transactions/TransactionHistory";
// import Transactions from "../features/transactions/Transactions";

// import "./app.css";

// // TODO: Import the Redux store and provide it to this component using <Provider>.
// const App = () => {
//   return (
//     <main>
//       <h1>Bank Account</h1>
//       <Transactions />
//       <TransactionHistory />
//     </main>
//   );
// };

// export default App;

import { Provider } from 'react-redux';
import { store } from './store';
import TransactionHistory from "../features/transactions/TransactionHistory";
import Transactions from "../features/transactions/Transactions";

import "./app.css";

// Import the Redux store and provide it to this component using <Provider>.
const App = () => {
  return (
    <Provider store={store}>
      <main>
        <h1>Bank Account</h1>
        <Transactions />
        <TransactionHistory />
      </main>
    </Provider>
  );
};

export default App;