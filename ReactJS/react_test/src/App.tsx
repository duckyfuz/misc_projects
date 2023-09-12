import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  let items = ["New York", "San Fransisco", "Singapore", "Tokyo"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          <strong>You pressed the button!</strong>
          <p>Press x to dismiss the alert.</p>
        </Alert>
      )}

      <ListGroup
        items={items}
        heading="Cties"
        onSelectItem={handleSelectItem}
      />

      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        Create ALERT!
      </Button>
    </div>
  );
}

export default App;
