
import './App.css';
import CakeContainer from './CakeContainer/CakeContainer'
import {Provider} from 'react-redux'
import store from '../src/CakeContainer/redux/store'
import HooksCakeContainer from './CakeContainer/HooksCakeContainer';
import IceCreamContainer from './IceCreamContainer/IceCreamContainer'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CakeContainer />
      <HooksCakeContainer />
      <IceCreamContainer />
    </div>
    </Provider>
  );
}

export default App;
