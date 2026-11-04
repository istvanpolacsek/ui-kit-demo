import type { Meta, StoryObj } from "@storybook/react-vite";
import { SelectField } from "./SelectField";
import { expect, userEvent, within } from "storybook/test";
const isDisabled = (el: HTMLElement) =>
  el.matches(":disabled") ||
  el.getAttribute("aria-disabled") === "true" ||
  el.closest('[aria-disabled="true"]') !== null;
const meta = {
  title: "Inputs/Select Field",
  component: SelectField,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SelectField>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    hasLabel: true,
    hasError: true,
    label: "Label",
    error: "Error",
    description: "Description",
    hasDescription: false,
    options: [
      { value: "Hello World", label: "Hello World" },
      { value: "Option 2", label: "Option 2" },
      { value: "Option 3", label: "Option 3" },
      { value: "Option 4", label: "Option 4" },
      { value: "Option 5", label: "Option 5" },
    ],
    placeholder: "Value",
  },
};
export const Selected: Story = {
  args: { ...Default.args, value: "Hello World" },
};
export const Open: Story = { args: { ...Default.args, open: true } };

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    hasLabel: true,
    label: "Choose an option",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(isDisabled(canvas.getAllByRole("combobox")[0])).toBe(true);
    await userEvent.click(canvas.getAllByRole("combobox")[0]);
    await expect(isDisabled(canvas.getAllByRole("combobox")[0])).toBe(true);
  },
};
export const WithDescriptionAndError: Story = {
  args: {
    ...Default.args,
    hasLabel: true,
    label: "Choose an option",
    hasDescription: true,
    description: "Pick one from the list",
    hasError: true,
    error: "This field is required",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByText("Pick one from the list")[0],
    ).toBeVisible();
    await expect(
      canvas.getAllByText("Pick one from the list")[0],
    ).toHaveTextContent("Pick one from the list");
    await expect(
      canvas.getAllByText("This field is required")[0],
    ).toBeVisible();
    await expect(
      canvas.getAllByText("This field is required")[0],
    ).toHaveTextContent("This field is required");
  },
};
export const FocusViaKeyboard: Story = {
  args: {
    ...Default.args,
    hasLabel: true,
    label: "Choose an option",
    placeholder: "Select...",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getAllByRole("combobox")[0].focus();
    await expect(canvas.getAllByRole("combobox")[0]).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await expect(isDisabled(canvas.getAllByRole("combobox")[0])).toBe(false);
  },
};
