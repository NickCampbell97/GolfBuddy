import AppHeader from './AppHeader';
import TripSelection from './SelectTrip/TripSelection';

function MainLayout() {
  return (
    <div className="App" style={{ alignContent: 'center' }}>
      <AppHeader />
      <div style={{ margin: 'auto', marginTop: '20px' }}>
        <TripSelection />
      </div>
    </div>
  );
}

export default MainLayout;