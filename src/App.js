import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import './App.css';
import './assets/main.css'
import Home from './pages/Home';
import LikedNews from './pages/LikedNews';
import News from './pages/News'
import SearchNews from './pages/SearchNews';
import NotFound from './pages/NotFound'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import  { persistor, store } from './redux/store';




function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/news/:id" element={<News/>}/>
                <Route exact path="/search/:id" element={<SearchNews/>}/>
                <Route exact path="/profile" element={<LikedNews/>}/>
                <Route exact path="*" element={<NotFound/>}/>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
