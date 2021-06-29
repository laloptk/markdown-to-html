import './App.scss';
import ReactDOM from 'react-dom'
import TextConverter from './TextConverter.js'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const CONVERT_TEXT = 'CONVERT_TEXT'

const convertText = (text) => {
  return {
    type: CONVERT_TEXT,
    text
  }
}

const convertTextReducer = (state = [], action) => {
  if(action.type === CONVERT_TEXT) {
    return action.text
  } else {
    return state
  }
}

const store = createStore(convertTextReducer)

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
