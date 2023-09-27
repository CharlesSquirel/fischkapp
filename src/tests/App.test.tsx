import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import NewCard from "../components/NewCard/NewCard";
import App, { Context } from "../App";
import { ContextProps, initialCardText } from "../components/services/types/types";
import { AppHeader } from "../components/Header/AppHeader";
import { AppLayout } from "../components/AppLayout";
import CardList from "../components/CardList/CardList";
import BackNewCard from "../components/NewCard/BackNewCard";

const contextTestValue: ContextProps = {
  isNewCardshowed: false,
  setIsNewCardShowed: () => {},
  newCardTexts: initialCardText,
  setNewCardTexts: () => {},
  flashCards: [],
  setFlashCards: () => {},
  scrollContainerRef: null,
};

it("render App", () => {
  render(
    <Context.Provider value={contextTestValue}>
      (
      <AppLayout>
        <AppHeader />
        <CardList>
          <NewCard />
        </CardList>
      </AppLayout>
      );
    </Context.Provider>
  );
  const addBtn = screen.getByAltText("plus icon");
  fireEvent.click(addBtn);
  const newCardComponent = screen.getByTestId("new-card");
  expect(newCardComponent).toBeInTheDocument();
  const FrontCardValue = screen.getByRole("textbox") as HTMLTextAreaElement;
  const nextBtn = screen.getByText("Next");
  const {newCardTexts} = contextTestValue;
  if (FrontCardValue.value.length <= 0) {
    expect(nextBtn).toHaveAttribute("disabled", "")
  }
  else {
    expect(nextBtn).toHaveAttribute("disabled", newCardTexts.front)
    fireEvent.click(nextBtn)
    const backNewCardComponent = screen.getByTestId("back-new-card")
    const frontNewCardComponent = screen.getByTestId("front-new-card")
    expect(backNewCardComponent).toBeInTheDocument()
    expect(frontNewCardComponent).not.toBeInTheDocument()
    const saveBtn = screen.getByText("Save")
    const BackCardValue = screen.getByRole("textbox") as HTMLTextAreaElement;
    if (BackCardValue.value.length <= 0) {
      expect(saveBtn).toHaveAttribute("disabled", "")
    }
    else {
      expect(saveBtn).toHaveAttribute("disabled", newCardTexts.back)
    }
  }


});
