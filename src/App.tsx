import Menu from "./components/Menu.tsx";
import { Main } from "./components/pages/Main.tsx";



function App() {
  return (
    <div className="flex flex-col">
      <Main/>
      <Menu />
    </div>
  );
}

export default App;
