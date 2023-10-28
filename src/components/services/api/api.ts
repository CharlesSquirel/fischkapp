import { CardTextsProps, IFlashcard } from "../types/types";

export const APP_URL = "https://training.nerdbord.io/api/v1/fischkapp/flashcards";
export const APP_TOKEN = "secret_token";

export const addCard = async (card: CardTextsProps) => {
  try {
    const res = await fetch(APP_URL, {
      method: "POST",
      headers: {
        Authorization: APP_TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        front: card.front,
        back: card.back,
      }),
    });

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    console.log("Card added successfully");
  } catch (err) {
    console.error("There was a problem adding the card", err);
  }
};

export const getCards = async (): Promise<IFlashcard[] | undefined> => {
  try {
    const res = await fetch(APP_URL);
    const data = await res.json();
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const updateCard = async (card: CardTextsProps, newCard: CardTextsProps) => {
  const { _id } = card;
  const { front, back } = newCard;
  try {
    const res = await fetch(`${APP_URL}/${_id}`, {
      method: "PATCH",
      headers: {
        Authorization: APP_TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        front: front,
        back: back,
      }),
    });
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const responseJson = await res.json();
    console.log("Card edited successfully");
  } catch (err) {
    console.error("There was a problem adding the card", err);
  }
};

export const deleteCard = async (card: CardTextsProps) => {
  const { _id } = card;
  try {
    const res = await fetch(`${APP_URL}/${_id}`, {
      method: "DELETE",
      headers: {
        Authorization: APP_TOKEN,
      },
    });
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    console.log("Card deleted successfully");
  } catch (err) {
    console.error("There was a problem deleting the card", err);
  }
};
