import { within, userEvent } from "@storybook/testing-library";

import { LoginForm } from "./LoginForm";
import { expect } from "@storybook/jest";

export default {
  title: "Interactions/Forms/LoginForm",
  component: LoginForm,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
 // tags: ["autodocs"],
};
export const LoginFormDefault = {};
// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const LoginPositiveForm = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Simulate interactions with the component
    await userEvent.type(canvas.getByTestId("username"), "firstname", {
      delay: 100,
    });

    await userEvent.type(canvas.getByTestId("password"), "a-random-password", {
      delay: 100,
    });

    await userEvent.click(canvas.getByRole("button"));

    // Assert DOM structure

    await expect(
      canvas.getByText("Welcome, email@example.com!")
    ).toBeInTheDocument();
  },
};

export const LoginNegativeForm = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Simulate interactions with the component

    await userEvent.type(canvas.getByTestId("password"), "a-random-password", {
      delay: 100,
    });

    await userEvent.click(canvas.getByRole("button"));

    // Assert DOM structure

    await expect(canvas.getByText("Failure, try again!")).toBeInTheDocument();
  },
};
