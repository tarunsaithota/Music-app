import { Provider } from 'react-redux';
import './App.css';
import appStore from './Utils/store';
import LandingPage from './Components/LandingPage';


const App = () => {
  
  return (
    <Provider store={appStore}> <LandingPage /> </Provider>
  );
}

export default App;
