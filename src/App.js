import './scss/app.scss';
import { HomeHeader } from './components/home';
import { TheNavigation } from './components/TheNavigation';

function App() {
  return (
    <div className='app'>
      <TheNavigation />
      <main>
        <HomeHeader />
      </main>
    </div>
  );
}

export default App;
