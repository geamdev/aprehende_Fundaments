import { useState } from "react";
import { TablaArco } from "./Components";
import { Form } from "./Components";

function App() {

  return (
    <div>
      <h1 className="font-bold text-3xl m-5">
        Game of Penalties
      </h1>
      <TablaArco />
      <Form />
    </div>
  );
}

export default App;
