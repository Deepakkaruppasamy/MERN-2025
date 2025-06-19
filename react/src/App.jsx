import React from "react";
import Child from "./component/Child";
import Home from "./pages/Home";
import Contact from "./pages/Contact";  
import Skills from "./pages/Skills";
import Counter from "./pages/Counter";

const App = () => {
  var fruit = ["Apple", "Banana", "Cherry"];

  return (
    <div>
      <Child name="Deepak" phno="1234567890" dept="IT" />
      <Home items={fruit} />
      <Counter />
      <Contact />
      <Skills />
    </div>
  );
};

export default App;
