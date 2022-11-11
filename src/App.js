import './App.css';
import { Layout } from './components/Layout';
import { CatalogPage } from './pages/CatalogPage';
import { BookPage } from './pages/BookPage';
import { categories as mock_categories } from './constants/mock';
import { Provider } from 'react-redux';
import { store } from "./store/index";
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route index element={<CatalogPage/>}/>
            <Route path="/book/:id" element={<BookPage/>}/>
          </Routes>
        </BrowserRouter>
      </Layout>
    </Provider>
  );
}

export default App;
