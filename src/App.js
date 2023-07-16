import './App.css';
import {Provider} from 'react-redux';
import store from './components/redux/store';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/iceCreamContainer';
import UserContainer from './components/UserContainer';

function App() {

  return (
    <Provider store = {store}>
    <div className='App'>
      <UserContainer/>
      {/* <IceCreamContainer/>
      <HooksCakeContainer/>
      <CakeContainer/> */}
    </div>
  </Provider>
  );
}


export default App;
