
// import ListGroup from './components/ListGroup';

import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import ThreeColumns from "./components/ThreeColumns";

// let items = ["New York", "Los Angeles", "Chicago", "Houston"];
// const handleSelectedItem = (item: string) => {
//   console.log(item);
// }

function App(){
  // const [alertVisible, setAlertVisibility] = useState(false);
  return (<div>
    {/* {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>myy alert</Alert>}
    <Button color='secondary'
    onClick={() => console.log(setAlertVisibility(true))}>
      Click
    </Button> */}

    {/* <ListGroup items={items} 
  heading="Cities" 
  onSelectedItem={handleSelectedItem}></ListGroup> */}
  </div>
  );
}

// export the App component to be used in other files
export default App; 