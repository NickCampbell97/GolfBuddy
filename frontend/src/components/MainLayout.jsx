import AppHeader from './AppHeader';
import TripSelection from './SelectTrip/TripSelection';
import UserPrompt from './UserPrompt';

function MainLayout() {
  return (
    <div className="App" style={{ alignContent: 'center' }}>
      <AppHeader />
      <UserPrompt />
      <div style={{ margin: 'auto', marginTop: '20px' }}>
        <TripSelection />
      </div>
    </div>
  );
}

export default MainLayout;