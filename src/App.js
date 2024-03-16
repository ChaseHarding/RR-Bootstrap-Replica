import './App.css';
import Background from './components/Background';
import StoreListings from './components/StoreListings';
import TopNav from './components/TopNav';

function App() {
  return (
    <div className="App">
     <TopNav />
     <Background />
     <StoreListings />
    </div>
  );
}

export default App;
