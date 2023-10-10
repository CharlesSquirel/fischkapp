import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";
import { ContextProps, initialCardText } from "../components/services/types/types";
import fetchMock from "jest-fetch-mock";
import { getCards } from "../components/services/api/api";

fetchMock.enableMocks();
jest.mock("../components/services/api/api");
const getCardsMocked = getCards as unknown as jest.Mock;

const mockedCardArray = [
  {
    _id: "1",
    _v: 1,
    back: "back1",
    front: "front1",
    uptadetAt: "test1",
    createdAt: "test1",
  },
  {
    _id: "2",
    _v: 2,
    back: "back2",
    front: "front2",
    uptadetAt: "test2",
    createdAt: "test2",
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

it("properly display cards", async () => {
  getCardsMocked.mockResolvedValue(mockedCardArray);
  render(<App />);
  await waitFor(() => {
    const cardList = screen.getByTestId("card-list");
    expect(cardList.children).toHaveLength(mockedCardArray.length);
  });
});

it("tests creating Card", async () => {
  getCardsMocked.mockResolvedValue(mockedCardArray);
  render(<App />);
  const addBtn = screen.getByAltText("plus icon");
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
  await waitFor(() => {
    fireEvent.change(backCardInput, { target: { value: "back value" } });
    fireEvent.click(saveBtn);
  });
  expect(newCardComponent).not.toBeInTheDocument();
});

it("test editing card", async () => {
  getCardsMocked.mockResolvedValue(mockedCardArray);
  render(<App />);
  await waitFor(() => {
    const editBtn = screen.getAllByAltText("Button edit")[0];
    fireEvent.click(editBtn);
  });
  const editCard = screen.getByTestId("edit-card");
  expect(editCard).toBeInTheDocument();
  const editInput = screen.getByRole("textbox") as HTMLTextAreaElement;
  const saveBtn = screen.getByRole("button", {
    name: /save/i,
  });
  expect(editInput.value).toEqual(mockedCardArray[0].front);
  const newValue = mockedCardArray[0].front + "test";
  await waitFor(() => {
    fireEvent.change(editInput, { target: { value: "" } });
    expect(saveBtn).toBeDisabled();
    fireEvent.change(editInput, { target: { value: newValue } });
    expect(editInput.value).toEqual(newValue);
    fireEvent.click(saveBtn);
    expect(editCard).not.toBeInTheDocument();
  });
  const frontCardInput = screen.getAllByTestId("card-text")[0] as HTMLTextAreaElement;
  expect(frontCardInput).toBeInTheDocument();
  // await waitFor(() => {
  //   expect(frontCardInput).toEqual(newValue)
  // })
});

it("properly handle cancel button edit", async () => {
  getCardsMocked.mockResolvedValue(mockedCardArray);
  render(<App />);
  await waitFor(() => {
    const editBtn = screen.getAllByAltText("Button edit")[0];
    fireEvent.click(editBtn);
    const editCard = screen.getByTestId("edit-card");
    expect(editCard).toBeInTheDocument();
    const cancelBtn = screen.getByRole("button", {
      name: /cancel/i,
    });
    fireEvent.click(cancelBtn);
    expect(editCard).not.toBeInTheDocument();
  });
});

it("properly delete card", async () => {
  getCardsMocked.mockResolvedValue(mockedCardArray);
  render(<App />);
  await waitFor(() => {
    const editBtn = screen.getAllByAltText("Button edit")[0];
    fireEvent.click(editBtn);
    const editCard = screen.getByTestId("edit-card");
    expect(editCard).toBeInTheDocument();
  });

  const editCard = screen.getByTestId("edit-card");
  const deleteBtn = screen.getByAltText("Button delete");
  await waitFor(() => {
    fireEvent.click(deleteBtn);
    expect(editCard).not.toBeInTheDocument();
  });
});
