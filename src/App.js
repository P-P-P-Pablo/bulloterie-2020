import React from "react";
import GridLayout from "./components/GridLayout";
import AsideLeft from "./components/AsideLeft";
import AsideRight from "./components/AsideRight";
import Header from "./components/Header";
import Main from "./components/Main";
import ComponentTester from "./components/ComponentTester";

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
