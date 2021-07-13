import './App.scss';
import TextConverter from './TextConverter.js'
import { createStore } from 'redux'
import convertTextReducer from './redux-store/reducers'
import { Provider } from 'react-redux'

const store = createStore(
  convertTextReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App() {
  return (
    <div className="App">
      <Provider store={store} >    
        <TextConverter />
      </Provider>      
    </div>
  );
}

export default App;
