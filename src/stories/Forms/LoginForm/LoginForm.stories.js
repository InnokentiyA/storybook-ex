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
export const SuccessfulLogin = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const email = "email@example.com";

    // Simulate interactions with the component
    await userEvent.type(canvas.getByTestId("username"), email, {
      delay: 100,
    });

    await userEvent.type(canvas.getByTestId("password"), "a-random-password", {
      delay: 100,
    });

    await userEvent.click(canvas.getByRole("button"));

    // Assert DOM structure
    const message = canvas.getByTestId("message");

    await expect(message).toBeInTheDocument();
    await expect(message).toHaveTextContent(`Welcome, ${email}!`);
    await expect(message).toHaveStyle("color: rgb(0, 128, 0);");
  },
};

export const LoginWithEmptyUsername = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Simulate interactions with the component

    await userEvent.type(canvas.getByTestId("password"), "a-random-password", {
      delay: 100,
    });

    await userEvent.click(canvas.getByRole("button"));

    // Assert DOM structure
    const message = canvas.getByTestId("message");

    await expect(message).toBeInTheDocument();
    await expect(message).toHaveTextContent("Login failed. Please check your credentials and try again.");
    await expect(message).toHaveStyle("color: rgb(255, 0, 0);");
  },
};

export const LoginWithEmptyPassword = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const email = "email@example.com";

    // Simulate interactions with the component

    await userEvent.type(canvas.getByTestId("username"), email, {
      delay: 100,
    });

    await userEvent.click(canvas.getByRole("button"));

    // Assert DOM structure
    const message = canvas.getByTestId("message");

    await expect(message).toBeInTheDocument();
    await expect(message).toHaveTextContent("Login failed. Please check your credentials and try again.");
    await expect(message).toHaveStyle("color: rgb(255, 0, 0);");
  },
};

export const ExampleLoginWithBug = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const email = "email@example.com";

    // Simulate interactions with the component
    await userEvent.type(canvas.getByTestId("username"), email, {
      delay: 100,
    });

    await userEvent.type(canvas.getByTestId("password"), "a-random-password", {
      delay: 100,
    });

    await userEvent.click(canvas.getByRole("button"));

    // Assert DOM structure
    const message = canvas.getByTestId("message");

    await expect(message).toBeInTheDocument();
    await expect(message).toHaveStyle("color: rgb(255, 0, 0);");
  },
};
