import React from "react";
import PersonaCard from "./Componentes/Apoyarlos/PersonaCard";



class App extends React.Component {
  
  render () {
    return (
      <div className="App">
        <h1>componente de clase</h1>
        <PersonaCard firstName={"Jane"} lastName={"Doe"} age={"45"} hairColor={"Black"}/>
        <PersonaCard firstName={"John"} lastName={"Smith"} age={"88"} hairColor={"Brown"}/>
        <PersonaCard firstName={"Millard"} lastName={"Fillmore"} age={"50"} hairColor={"Brown"}/>
        <PersonaCard firstName={"Maria"} lastName={"Smith"} age={"62"} hairColor={"Brown"}/>
      </div>
    );
  }
}

export default App;
