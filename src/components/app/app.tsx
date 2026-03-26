import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';

type AppScreenProps = {
  errorsCount: number;
};

function App({errorsCount}: AppScreenProps) {
  return (
    <WelcomeScreen errorsCount={errorsCount} />
  );
}

export default App;
