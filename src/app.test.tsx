import { render, screen } from "@testing-library/react";
import App from "./App";

it("should have hello world", () => {
  render(<App />);
  const message = screen.queryByText(
    /Click on the Vite and React logos to learn more/i
  );
  expect(message).toBeVisible();
});
