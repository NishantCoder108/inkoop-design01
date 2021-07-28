import Navbar from "./components/Navbar";
import Mainbar from "./components/Mainbar";
import Phone from "./components/Phone";

function App() {
  let widthOfScreen = 1300;

  return (
    <div>
      {window.screen.width < widthOfScreen ? (
        <Phone />
      ) : (
        <>
          <Navbar />

          <Mainbar />
        </>
      )}
    </div>
  );
}

export default App;
