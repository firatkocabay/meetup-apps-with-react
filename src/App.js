import { Routes,Route } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';

function App() {
  return (
  <div>
    <Routes>
      <Route path="/" element={<AllMeetupsPage />} exact />
      <Route path="/new-meetup" element={<NewMeetupPage />} />
      <Route path="/favs" element={<FavoritesPage />} />
    </Routes>
  </div>
  );
}

export default App;
