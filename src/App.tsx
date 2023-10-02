import './App.css';
import ProductListContainer from './components/product/list/product-list.container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ACTECK Online Store</h1>
      </header>
      <main>
        <ProductListContainer />
      </main>
    </div>
  );
}

export default App;
