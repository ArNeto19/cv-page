import { useState } from "react";
import { Heading } from "./components/Heading/index";
import { ToggleSwitch } from "./components/ToggleSwitch";
import { Resume } from "./components/Resume";
import { Skills } from "./components/Skills";
import { Studies } from "./components/Studies/Studies";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer/Footer";

import "./App.scss";

function App() {
  const [toggleToEnglish, setToggleToEnglish] = useState(false);

  return (
    <div className="App">
      <Heading />
      <hr />
      <ToggleSwitch toggleToEnglish={toggleToEnglish} toggleAction={setToggleToEnglish} />
      <Resume toggleToEnglish={toggleToEnglish} />
      <hr />
      <Skills toggleToEnglish={toggleToEnglish} />
      <hr />
      <Studies toggleToEnglish={toggleToEnglish} />
      <hr />
      <Experience toggleToEnglish={toggleToEnglish} />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
