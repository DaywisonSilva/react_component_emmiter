import { Button, Dialog } from "./components";
import { onShowDialog } from "./components/Dialog/events";
import globalStyles from "./styles";

function App() {
  globalStyles();
  return (
    <>
      <Button onClick={() => onShowDialog()} label="Show" />
      <Dialog />
    </>
  );
}

export default App;
