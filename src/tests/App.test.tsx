import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor, act, getAllByTestId } from "@testing-library/react";
import NewCard from "../components/NewCard/NewCard";
import App, { Context } from "../App";
import { ContextProps, ICard, IFlashcard, initialCardText } from "../components/services/types/types";
import { AppHeader } from "../components/Header/AppHeader";
import { AppLayout } from "../components/AppLayout";
import CardList from "../components/CardList/CardList";
import Card from "../components/Card/Card";
import fetchMock from "jest-fetch-mock";
import { addCard, deleteCard, getCards, token, url } from "../components/services/api/api";
import { ReactNode } from "react";

fetchMock.enableMocks();
jest.mock("../components/services/api/api");
const getCardsMocked = getCards as unknown as jest.Mock;

const mockedCardArray = [
  {
    _id: "0",
    _v: 0,
    back: "back0",
    front: "front0",
    uptadetAt: "test0",
    createdAt: "test0",
  },
  {
    _id: "1",
    _v: 1,
    back: "back1",
    front: "front1",
    uptadetAt: "test1",
    createdAt: "test1",
  },
  {
    _id: "3",
    _v: 3,
    back: "back3",
    front: "front3",
    uptadetAt: "test3",
    createdAt: "test3",
  },
];

const mockedCard = {
  _id: "123",
  _v: 1,
  back: "back",
  front: "front",
  uptadetAt: "test",
  createdAt: "test",
};

const contextTestValue: ContextProps = {
  isNewCardshowed: false,
  setIsNewCardShowed: () => {},
  newCardTexts: initialCardText,
  setNewCardTexts: () => {},
  flashCards: mockedCardArray,
  setFlashCards: () => {},
  scrollContainerRef: null,
};

beforeEach(async () => {
  getCardsMocked.mockResolvedValue(mockedCardArray);
  render(<App />);
});

it("properly display cards", async () => {
  await waitFor(() => {
    const cardList = screen.getByTestId("card-list");
    expect(cardList.children).toHaveLength(mockedCardArray.length);
  });
});

it("tests creating Card", async () => {
  screen.debug();
  const addBtn = screen.getByRole("button");
  await waitFor(() => {
    fireEvent.click(addBtn);
  });
  const newCardComponent = screen.getByTestId("new-card");
  const frontNewCard = screen.getByTestId("front-new-card");
  expect(newCardComponent).toBeInTheDocument();
  expect(frontNewCard).toBeInTheDocument();

  const frontCardInput = screen.getByRole("textbox") as HTMLTextAreaElement;
  const nextBtn = screen.getByRole("button", {
    name: /next/i,
  });
  expect(frontCardInput.value).toBe("");
  expect(nextBtn).toBeDisabled();

  await waitFor(() => {
    fireEvent.change(frontCardInput, { target: { value: "front value" } });
    fireEvent.click(nextBtn);
  });

  const backNewCard = screen.getByTestId("back-new-card");
  expect(backNewCard).toBeInTheDocument();

  const backCardInput = screen.getByRole("textbox") as HTMLTextAreaElement;
  const saveBtn = screen.getByRole("button", {
    name: /save/i,
  });
  expect(backCardInput.value).toBe("");
  expect(saveBtn).toBeDisabled();
  const { addCard } = require("../components/services/api/api");
  const mockedAdd = jest.fn(addCard);
  await waitFor(() => {
    fireEvent.change(backCardInput, { target: { value: "back value" } });
    fireEvent.click(saveBtn);
  });
  expect(newCardComponent).not.toBeInTheDocument();
});

it("test editing card", () => {
  screen.debug();
});

// describe("tests editing card", () => {
//   beforeEach(() => {
//     render(<Card card={flaschCardTest} />);
//     const editBtn = screen.getByAltText("Button edit");
//     const card = screen.getByTestId("card");

//     fireEvent.click(editBtn);

//     const editCard = screen.getByTestId("edit-card");
//     expect(editCard).toBeInTheDocument();
//     expect(card).not.toBeInTheDocument();
//   });

//   it("properly handle save button", () => {
//     const editInput = screen.getByRole("textbox") as HTMLTextAreaElement;
//     const saveBtn = screen.getByText("Save");

//     editInput.value.length === 0 ? expect(saveBtn).toHaveAttribute("disabled") : expect(saveBtn).not.toHaveAttribute("disabled");
//   });
//   it("properly handle cancel button", () => {
//     const cancelBtn = screen.getByText("Cancel");
//     const editCard = screen.getByTestId("edit-card");

//     fireEvent.click(cancelBtn);

//     expect(editCard).not.toBeInTheDocument();

//     const card = screen.getByTestId("card");
//     expect(card).toBeInTheDocument();
//   });
// });

// it("properly display cards", async () => {
//   render(
//     <CardList>
//       {flashCards.map((card, index: number): ReactNode => {
//         return <Card key={index} card={card} />;
//       })}
//     </CardList>
//   );
//   flashCards.forEach(({ front }) => {
//     const frontText = screen.getByText(front);
//     expect(frontText).toBeInTheDocument();
//   });
//   const cards = screen.getAllByTestId("card");
//   cards.forEach((card) => {
//     fireEvent.click(card);
//   });
//   flashCards.forEach(({ back }) => {
//     const backText = screen.getByText(back);
//     expect(backText).toBeInTheDocument();
//   });
// });
