import Board from "./components/Board";
import Header from "./components/Header";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Board />
    </DndProvider>
  );
}

export default App;
