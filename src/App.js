import './scss/app.scss';
import { HomeFeature, HomeHeader, HomeHero } from './components/home';
import { TheNavigation } from './components/TheNavigation';

function App() {
  return (
    <div className='app'>
      <TheNavigation />
      <main>
        <HomeHeader />
        <HomeFeature />
        <HomeHero />
      </main>
    </div>
  );
}

export default App;
