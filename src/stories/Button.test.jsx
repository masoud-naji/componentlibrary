import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import { Primary, Red } from "./Button.stories";

test("Should render Button", () => {
  const label = "Button";
  render(<Button label={label} />);
  const btnElm = screen.getByRole("button");
  expect(btnElm).toBeInTheDocument();
  expect(btnElm).toHaveTextContent(label);
});

test("Should render Primary btn", () => {
  const label = "Button";
  render(<Primary {...Primary.args} />);
  const btnElm = screen.getByRole("button");
  expect(btnElm).toHaveClass("storybook-button--primary");
  expect(btnElm).toHaveTextContent(label);
});

test("SHould be Red", () => {
  const backgroundColor = "red";
  render(<Primary {...Red.args} />);
  const btnElm = screen.getByRole("button");
  expect(btnElm).toHaveStyle(`background-color:${backgroundColor}`);
});
