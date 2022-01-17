import React from "react";
import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor
} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Login from "./containers/Login/Login";
import { MemoryRouter } from "react-router"; // https://reacttraining.com/react-router/web/api/MemoryRouter

describe("Login", () => {
  afterEach(() => {
    cleanup();
  });
  const renderLogin = () =>
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
  test("should look for non existent device and display error", async () => {
    renderLogin();
    const loginElement = screen.getByText("Login");
    expect(loginElement).toBeInTheDocument();
    expect(window.location.pathname).toBe("/");
  });

  test("should NOT login successfully", async () => {
    renderLogin();
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const userNameField = screen.getByTestId("username") as HTMLInputElement;
    const passwordField = screen.getByTestId("password");
    const button = screen.getByTestId("login");
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      fireEvent.change(userNameField, { target: { value: "Bobby" } });
      fireEvent.change(passwordField, { target: { value: "WrongPassword" } });
      fireEvent.click(button);
    });

    await waitFor(() => {
      expect(userNameField.value).toBe("Bobby");
    });
    await waitFor(() => {
      const message = screen.getByText(
        "Password value has minimum 8 and maximum 20 character limit and must have at least 1 uppercase, 1 lowercase and 1 special character"
      );
      expect(message).toBeInTheDocument();
    });
  });

  test("should login successfully", async () => {
    renderLogin();
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const userNameField = screen.getByTestId("username") as HTMLInputElement;
    const passwordField = screen.getByTestId("password");
    const button = screen.getByTestId("login");
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      fireEvent.change(userNameField, { target: { value: "Bobby" } });
      fireEvent.change(passwordField, { target: { value: "Password&." } });
      fireEvent.click(button);
    });

    await waitFor(() => {
      expect(userNameField.value).toBe("Bobby");
    });
    await waitFor(() => {
      const message = screen.getByText("You are logged in");
      expect(message).toBeInTheDocument();
    });
  });
});
