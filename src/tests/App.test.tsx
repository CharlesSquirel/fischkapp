import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import NewCard from "../components/NewCard/NewCard";
import { Context } from "../App";
import { ContextProps, initialCardText } from "../components/services/types/types";
import { AppHeader } from "../components/Header/AppHeader";
import { AppLayout } from "../components/AppLayout";
import CardList from "../components/CardList/CardList";
import Card from "../components/Card/Card";
import fetchMock from "jest-fetch-mock";
import { deleteCard, token, url } from "../components/services/api/api";

fetchMock.enableMocks();

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

describe("testing delete card", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  it("properly delete card", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ message: "Card deleted successfully" }), { status: 200 });
    const result = await deleteCard(flaschCardTest);
    const { _id } = flaschCardTest;
    try {
      expect(fetch).toHaveBeenCalledWith(`${url}/${_id}`, {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      });
    } catch (err) {
      fail("Funkcja rzuciła błędem: " + err);
    }
  });

  it('Powinno obsłużyć błąd przy usuwaniu karty', async () => {
    // Symulujemy błąd na serwerze
    fetchMock.mockResponseOnce(JSON.stringify({ error: 'Błąd podczas usuwania karty' }), { status: 500 });
    const { _id } = flaschCardTest;

    try {
      await deleteCard(flaschCardTest);

      // Jeśli funkcja nie rzuciła błędem, test jest nieudany
      fail('Funkcja nie rzuciła błędem');
    } catch (error) {
      // Sprawdzamy, czy funkcja fetch została wywołana z odpowiednimi argumentami (metoda DELETE, URL i nagłówki)
      expect(fetch).toHaveBeenCalledWith(`url/${_id}`, {
        method: 'DELETE',
        headers: {
          Authorization: 'token', // Załóżmy, że token jest dostępny
        },
      });

      // Sprawdzamy, czy funkcja zwraca oczekiwany błąd
      // expect(error.message).toBe('Network response was not ok');
    }
  });
});
});
