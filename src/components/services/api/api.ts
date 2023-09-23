import { CardTextsProps } from "../types/types";

const url = "https://training.nerdbord.io/api/v1/fischkapp/flashcards";

export const addCard = async (card: CardTextsProps) => {
  try {
    const res = await fetch(url, {
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

export const getCards = async (settingFunction: React.Dispatch<React.SetStateAction<any>>) => {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  settingFunction(data ? data : null);
};
