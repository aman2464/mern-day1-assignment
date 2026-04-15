import UserProfile from './component/UserProfile';

function App() {
  return (
    <div className="App">
      {/* Passing name as a prop as per User Story  */}
      <UserProfile developerName="Aman Kumar Choudhary" />
    </div>
  );
}

export default App;
