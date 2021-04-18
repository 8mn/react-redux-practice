
import './App.css';
import CakeContainer from './CakeContainer/CakeContainer'
import {Provider} from 'react-redux'
import store from '../src/CakeContainer/redux/store'


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CakeContainer />
    </div>
    </Provider>
  );
}

export default App;
