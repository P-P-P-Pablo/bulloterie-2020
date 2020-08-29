import React from "react";
import GridLayout from "./Layout/GridLayout";
import AsideLeft from "./Layout/AsideLeft";
import AsideRight from "./Layout/AsideRight";
import Header from "./Layout/Header";
import Main from "./Layout/Main";
import ComponentTester from "./Layout/ComponentTester";

function App() {
  return (
    <div className="App">
      <GridLayout>
        <Header>header</Header>
        <AsideLeft>aside-left</AsideLeft>
        <Main>
          main
          <ComponentTester />
        </Main>
        <AsideRight>aside-right</AsideRight>
      </GridLayout>
    </div>
  );
}

export default App;
