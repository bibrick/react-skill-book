import React,{useState, useCallback} from 'react';
import { Route } from 'react-router-dom';
import NewsList from './components/NewsList';
import NewsPage from './pages/NewsPage';

const App = () => {
  return <Route path="/:category?" component={NewsPage} />
};
 export default App;