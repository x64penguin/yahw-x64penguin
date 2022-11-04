import './App.css';
import { Layout } from './components/Layout';
import { CatalogPage } from './pages/CatalogPage';
import { BookPage } from './pages/BookPage';
import { categories as mock_categories } from './constants/mock';

function App() {
  return (
    <Layout>
      <CatalogPage categories={mock_categories}/>
      {/* <BookPage book={mock_categories[0].books[0]}/> */}
    </Layout>
  );
}

export default App;