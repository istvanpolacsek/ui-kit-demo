import type { Meta, StoryObj } from "@storybook/react-vite";
import { SliderField } from "./SliderField";
import { expect, userEvent, within } from "storybook/test";
const isDisabled = (el: HTMLElement) =>
  el.matches(":disabled") ||
  el.getAttribute("aria-disabled") === "true" ||
  el.closest('[aria-disabled="true"]') !== null;
const meta = {
  title: "Inputs/Slider Field",
  component: SliderField,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SliderField>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    label: "Label",
    description: "Description",
    hasLabel: true,
    hasDescription: true,
  },
};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };

export const ShowsLabelAndDescription: Story = {
  args: {
    ...Default.args,
    hasLabel: true,
    hasDescription: true,
    label: "Volume",
    description: "Adjust the volume level",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Volume")[0]).toBeVisible();
    await expect(canvas.getAllByText("Volume")[0]).toHaveTextContent("Volume");
    await expect(
      canvas.getAllByText("Adjust the volume level")[0],
    ).toBeVisible();
    await expect(
      canvas.getAllByText("Adjust the volume level")[0],
    ).toHaveTextContent("Adjust the volume level");
  },
};
export const FocusAndActivateWithKeyboard: Story = {
  args: { ...Default.args, hasLabel: true, label: "Brightness" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getAllByRole("button")[0].focus();
    await expect(canvas.getAllByRole("button")[0]).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await expect(isDisabled(canvas.getAllByRole("button")[0])).toBe(false);
  },
};
