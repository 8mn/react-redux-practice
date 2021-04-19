
import './App.css';
import CakeContainer from './CakeContainer/CakeContainer'
import {Provider} from 'react-redux'
import store from '../src/CakeContainer/redux/store'
import HooksCakeContainer from './CakeContainer/HooksCakeContainer';
import IceCreamContainer from './IceCreamContainer/IceCreamContainer'
import CandyContainer from './candyContainer/CandyContainer';
import NewCakeContainer from './NewCakeContainer/NewCakeContainer';
import UserContainer from './UserContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <CakeContainer />
      <HooksCakeContainer />
      <IceCreamContainer />
      <CandyContainer />
      <NewCakeContainer /> */}
      <UserContainer />
    </div>
    </Provider>
  );
}

export default App;
