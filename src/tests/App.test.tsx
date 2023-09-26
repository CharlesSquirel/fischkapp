import '@testing-library/jest-dom'
import { render, screen, fireEvent} from "@testing-library/react";
import NewCard from "../components/NewCard/NewCard";
import React, { ReactNode } from "react";

jest.mock("../App", () => ({
  Context: {
    Consumer: ({ children }: { children: (props: any) => ReactNode }) => {
      return children({ newCardTexts: { front: "", back: "" } });
    },
  },
}));


it("render App", () => {
  render(<NewCard />);
  const FrontCardValue = screen.getByRole("textbox") as HTMLTextAreaElement;
  const nextBtn = screen.getByText(/next/i);

  fireEvent.change(FrontCardValue, { target: { value: "Some text" } }); // Symulujemy zmianę wartości textarea

  if (FrontCardValue.value === "") {
    expect(nextBtn).toHaveAttribute("disabled", "true");
  }
});
