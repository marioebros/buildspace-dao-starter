import { useAddress, ConnectWallet } from "@thirdweb-dev/react";

const App = () => {
  // Use the hooks thirdweb gives us.
  const address = useAddress();
  console.log("🙏🏽 Address:", address);

  // This is the case where the user hasn't connected their wallet
  // to you web app. Let them call connectWallet.
  if (!address) {
    return (
      <div className="landing">
        <h1>Welcome to FirstGenDAO</h1>
        <div className="btn-hero">
          <ConnectWallet />
        </div>
      </div>
    );
  }

  // This is the case where we have the user's address
  // Which means they've connected their wallet to our site!
  return (
    <div className="landing">
      <h1>😈 Wallet connected, no what? 💯</h1>
    </div>);
}

export default App;
