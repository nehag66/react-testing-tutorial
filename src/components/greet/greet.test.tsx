// Greet should render the text hello and if a name is passed into the Component, it should render hello followed by the name

import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

test("Greet renders correctly", () => {
	render(<Greet/>);
	const textElement = screen.getByText('Hello'); // i denotes to ignore the case
	expect(textElement).toBeInTheDocument();
})

test("Greet renders with a name", () => {
	render(<Greet name='Vishwas'/>);
	const textElement = screen.getByText('Hello Vishwas');
	expect(textElement).toBeInTheDocument();
})
