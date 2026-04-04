import RouteApp from "./routes";
import ToasterProvider from "./components/ToasterProvider";

function App() {
  return (
    <>
      <div>
        <RouteApp />
        <ToasterProvider />
      </div>
    </>
  );
}

export default App;
