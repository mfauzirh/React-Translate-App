import TopBar from './Top_Bar/topBar';
import './App.css';
import Content from './Content/content';
import { TranslateProvider } from './Context/translateContext';

function App() {
  return (
    <div className="App">
      <TranslateProvider>
        <TopBar/>
        <Content/>
      </TranslateProvider>
    </div>
  );
}

export default App;
