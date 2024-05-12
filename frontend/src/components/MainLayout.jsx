import AppHeader from './AppHeader';
import TripSelection from './SelectTrip/TripSelection';
import UserPrompt from './UserPrompt';
import ImageComponent from './ImageComponent';

function MainLayout() {
  return (
    <div className="App" style={{ alignContent: 'center' }}>
      <AppHeader />
      <div>
        <ImageComponent alt="Image" />
      </div>
      <UserPrompt />
      <div style={{ margin: 'auto', marginTop: '15px' }}>
        <TripSelection />
      </div>
    </div>
  );
}

export default MainLayout;