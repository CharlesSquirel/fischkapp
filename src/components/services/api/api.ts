import { CardTextsProps } from "../types/types";

export const addCard = async (card: CardTextsProps) => {
  try {
    const res = await fetch("https://training.nerdbord.io/api/v1/fischkapp/flashcards", {
      method: "POST",
      headers: {
        Authorization: "secret_token",
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

    const data = await res.json();
    console.log("Card added successfully:", data);
  } catch (error) {
    console.error("There was a problem adding the card:", error);
  }
};
