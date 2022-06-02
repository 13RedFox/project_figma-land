import './scss/app.scss';
import { HomeFeature, HomeHeader } from './components/home';
import { TheNavigation } from './components/TheNavigation';

function App() {
  return (
    <div className='app'>
      <TheNavigation />
      <main>
        <HomeHeader />
        <HomeFeature />
      </main>
    </div>
  );
}

export default App;
