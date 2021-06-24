import Header from "./conponents/Header";
import Prototypes from "./conponents/Prototypes"
import Orders from "./conponents/Orders"
import Footer from "./conponents/Footer";
import AppStateProvider from "./Providers/AppStateProvider";

function App() {
  return (
    <AppStateProvider>
    <Header />
    <div className="container">
      <Prototypes/>
      <Orders/>
      <Footer/>
    </div>
    </AppStateProvider>
  );
}

export default App;
