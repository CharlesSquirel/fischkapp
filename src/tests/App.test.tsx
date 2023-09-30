import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor, act, getAllByTestId } from "@testing-library/react";
import NewCard from "../components/NewCard/NewCard";
import { Context } from "../App";
import { ContextProps, ICard, IFlashcard, initialCardText } from "../components/services/types/types";
import { AppHeader } from "../components/Header/AppHeader";
import { AppLayout } from "../components/AppLayout";
import CardList from "../components/CardList/CardList";
import Card from "../components/Card/Card";
import fetchMock from "jest-fetch-mock";
import { deleteCard, getCards, token, url } from "../components/services/api/api";
import { ReactNode } from "react";

fetchMock.enableMocks();

const flashCards = [
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

const flaschCardTest = {
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
  flashCards: [flaschCardTest],
  setFlashCards: () => {},
  scrollContainerRef: null,
};

beforeEach(() => {
  render(
    <Context.Provider value={contextTestValue}>
      <AppLayout>
        <AppHeader />
        <CardList>
          <></>
        </CardList>
      </AppLayout>
    </Context.Provider>
  );
});

it("tests creating Card", () => {
  render(<NewCard />);
  const addBtn = screen.getByAltText("plus icon");
  fireEvent.click(addBtn);

  const newCardComponent = screen.getByTestId("new-card");
  expect(newCardComponent).toBeInTheDocument();

  const FrontCardValue = screen.getByRole("textbox") as HTMLTextAreaElement;
  const nextBtn = screen.getByText("Next");
  const { newCardTexts } = contextTestValue;

  if (FrontCardValue.value.length === 0) {
    expect(nextBtn).toHaveAttribute("disabled", "");
  } else {
    expect(nextBtn).toHaveAttribute("disabled", newCardTexts.front);
    fireEvent.click(nextBtn);

    const backNewCardComponent = screen.getByTestId("back-new-card");
    const frontNewCardComponent = screen.getByTestId("front-new-card");
    expect(backNewCardComponent).toBeInTheDocument();
    expect(frontNewCardComponent).not.toBeInTheDocument();

    const saveBtn = screen.getByText("Save");
    const BackCardValue = screen.getByRole("textbox") as HTMLTextAreaElement;

    if (BackCardValue.value.length === 0) {
      expect(saveBtn).toHaveAttribute("disabled", "");
    } else {
      expect(saveBtn).toHaveAttribute("disabled", newCardTexts.back);
    }
  }
});

describe("tests editing card", () => {
  beforeEach(() => {
    render(<Card card={flaschCardTest} />);
    const editBtn = screen.getByAltText("Button edit");
    const card = screen.getByTestId("card");

    fireEvent.click(editBtn);

    const editCard = screen.getByTestId("edit-card");
    expect(editCard).toBeInTheDocument();
    expect(card).not.toBeInTheDocument();
  });

  it("properly handle save button", () => {
    const editInput = screen.getByRole("textbox") as HTMLTextAreaElement;
    const saveBtn = screen.getByText("Save");

    editInput.value.length === 0 ? expect(saveBtn).toHaveAttribute("disabled") : expect(saveBtn).not.toHaveAttribute("disabled");
  });
  it("properly handle cancel button", () => {
    const cancelBtn = screen.getByText("Cancel");
    const editCard = screen.getByTestId("edit-card");

    fireEvent.click(cancelBtn);

    expect(editCard).not.toBeInTheDocument();

    const card = screen.getByTestId("card");
    expect(card).toBeInTheDocument();
  });
});

it("properly delete card", async () => {
  const { _id } = flaschCardTest;
  const { setFlashCards, flashCards } = contextTestValue;

  try {
    fetchMock.mockResponseOnce(JSON.stringify({ message: "Card deleted successfully" }), { status: 200 });

    await deleteCard(flaschCardTest);

    expect(fetch).toHaveBeenCalledWith(`${url}/${_id}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    });
    getCards(setFlashCards);
    // Sprawdź, czy karta nie istnieje już w flashCards
    const deletedCard = flashCards.find((card) => card._id === flaschCardTest._id);
    if (deletedCard) {
      throw new Error("Network response was not ok");
    }
  } catch (err) {
    throw new Error("There was a problem deleting the card" + err);
  }
});

describe("testing card list", () => {
  const flashCards = [
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

  it("properly display cards", async () => {
    render(
      <CardList>
        {flashCards.map((card, index: number): ReactNode => {
          return <Card key={index} card={card} />;
        })}
      </CardList>
    );
    flashCards.forEach(({ front }) => {
      const frontText = screen.getByText(front);
      expect(frontText).toBeInTheDocument();
    });
    const cards = screen.getAllByTestId("card");
    cards.forEach((card) => {
      fireEvent.click(card);
    });
    flashCards.forEach(({ back }) => {
      const backText = screen.getByText(back);
      expect(backText).toBeInTheDocument();
    });
    screen.debug();
  });
});
