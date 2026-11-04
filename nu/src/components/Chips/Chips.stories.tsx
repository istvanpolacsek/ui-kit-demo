import type { Meta, StoryObj } from "@storybook/react-vite";
import { Chips } from "./Chips";
import { expect, userEvent, within } from "storybook/test";
const isDisabled = (el: HTMLElement) =>
  el.matches(":disabled") ||
  el.getAttribute("aria-disabled") === "true" ||
  el.closest('[aria-disabled="true"]') !== null;
const meta = {
  title: "  ↳ Chips/Chips",
  component: Chips,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Chips>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    leftIcon: true,
    designValue: "Chips",
    rightIcon: true,
    state: "Default",
    size: "Large",
  },
};

export const Selected: Story = {
  args: { ...Default.args, state: "Selected" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByRole("button", { name: "Chips" })[0],
    ).toBeVisible();
    await expect(
      isDisabled(canvas.getAllByRole("button", { name: "Chips" })[0]),
    ).toBe(false);
  },
};
export const LargeWithIcons: Story = {
  args: { ...Default.args, size: "Large", leftIcon: true, rightIcon: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByRole("button", { name: "Chips" })[0],
    ).toBeVisible();
    await userEvent.click(canvas.getAllByRole("button", { name: "Chips" })[0]);
    await expect(
      isDisabled(canvas.getAllByRole("button", { name: "Chips" })[0]),
    ).toBe(false);
  },
};
