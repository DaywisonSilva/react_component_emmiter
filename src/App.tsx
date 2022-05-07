import { Button, DialogContainer } from "./components";
import { showDialog } from "./components/Dialog/events";
import globalStyles from "./styles";

function App() {
  globalStyles();
  return (
    <>
      <Button
        onClick={() => showDialog({ image: "./image-dialog.jpg" })}
        label="Show"
      />
      <DialogContainer />
    </>
  );
}

export default App;
