import styled from "styled-components";

const GridLayout = styled.div`
	width: 100%;
	display: grid;
	grid-template-areas:
		"header header header"
		"aside-left main aside-right"
		"footer footer footer";
	grid-template-columns: 20% 1fr 20%;
	color: black;

	& h1 {
		color: black;
	}
`;

export default GridLayout;
