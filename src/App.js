import logo from './logo.svg';
import './App.css';

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_U

function App() {
  return (
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
      <ThemeProvider theme={theme}>
        <MainLayout />
      </ThemeProvider>
    </MoralisProvider>
  );
}

export default App;
