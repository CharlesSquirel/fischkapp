import { CardTextsProps } from "../types/types";

const url = "https://training.nerdbord.io/api/v1/fischkapp/flashcards";
const token = "secret_token";

export const addCard = async (card: CardTextsProps) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: token,
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
    console.log("Card added successfully:");
  } catch (err) {
    console.error("There was a problem adding the card:", err);
  }
};

export const getCards = async (settingFunction: React.Dispatch<React.SetStateAction<any>>) => {
  const res = await fetch(url);
  const data = await res.json();
  settingFunction(data ? data : null);
};

export const updateCard = async (card: CardTextsProps, newCard: CardTextsProps) => {
  const { _id } = card;
  const { front, back } = newCard;
  try {
    const res = await fetch(`${url}/${_id}`, {
      method: "PATCH",
      headers: {
        Authorization: token,
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
    console.log("Card edited successfully:");
  } catch (err) {
    console.error("There was a problem adding the card:", err);
  }
};

export const deleteCard = async (card: CardTextsProps) => {
  const { _id } = card;
  try {
    const res = await fetch(`${url}/${_id}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    });
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    console.log("Card deleted successfully:");
  } catch (err) {
    console.error("There was a problem deleting the card:", err);
  }
};
