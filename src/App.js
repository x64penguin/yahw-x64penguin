import './App.css';
import { Layout } from './components/Layout';
import { CatalogPage } from './pages/CatalogPage';
import { BookPage } from './pages/BookPage';
import { categories as mock_categories } from './constants/mock';
import { Provider } from 'react-redux';
import { store } from "./store/index";
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { CartPage } from './pages/CartPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<CatalogPage/>}/>
            <Route path="/book/:id" element={<BookPage/>}/>
            <Route path="/cart" element={<CartPage/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
