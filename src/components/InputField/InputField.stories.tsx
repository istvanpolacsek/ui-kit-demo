import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputField } from "./InputField";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Inputs/Input Field",
  component: InputField,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof InputField>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    hasLabel: true,
    hasError: false,
    label: "Label",
    error: "Error",
    hasDescription: false,
    description: "Description",
    value: "Value",
    state: "Default",
    valueType: "Default",
  },
};

export const WithLabelAndDescription: Story = {
  args: {
    ...Default.args,
    hasLabel: true,
    label: "Email address",
    hasDescription: true,
    description: "We will never share your email",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Email address")[0]).toBeVisible();
    await expect(canvas.getAllByText("Email address")[0]).toHaveTextContent(
      "Email address",
    );
    await expect(
      canvas.getAllByText("We will never share your email")[0],
    ).toBeVisible();
    await expect(
      canvas.getAllByText("We will never share your email")[0],
    ).toHaveTextContent("We will never share your email");
    canvas.getAllByRole("textbox")[0].focus();
    await expect(canvas.getAllByRole("textbox")[0]).toHaveFocus();
  },
};
export const ErrorStateWithMessage: Story = {
  args: {
    ...Default.args,
    hasLabel: true,
    label: "Username",
    state: "Error",
    hasError: true,
    error: "Username is already taken",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByText("Username is already taken")[0],
    ).toBeVisible();
    await expect(
      canvas.getAllByText("Username is already taken")[0],
    ).toHaveTextContent("Username is already taken");
    canvas.getAllByRole("textbox")[0].focus();
    await userEvent.type(canvas.getAllByRole("textbox")[0], "newuser");
    await expect(canvas.getAllByRole("textbox")[0]).toHaveValue("newuser");
  },
};
