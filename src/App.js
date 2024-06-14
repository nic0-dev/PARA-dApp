import './App.css';
import LandingPage from './LandingPage';
<<<<<<< HEAD

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
=======
import { ThirdwebProvider } from "@thirdweb-dev/react";

const activeChain = "arbitrum-sepolia";
const clientId = 'fb3a8f0afcdd06b8a366d9781dadbac2'; // replace with your actual client ID

function App() {
  return (
    <ThirdwebProvider
      clientId={clientId}
      activeChain={activeChain}>
      <div className="App">
        <LandingPage />
      </div>
    </ThirdwebProvider>
>>>>>>> master
  );
}

export default App;
<<<<<<< HEAD
=======

>>>>>>> master
