import type { Meta, StoryObj } from "@storybook/react-vite";
import { PaginationPrevious } from "./PaginationPrevious";
import { expect, userEvent, within } from "storybook/test";
const isDisabled = (el: HTMLElement) =>
  el.matches(":disabled") ||
  el.getAttribute("aria-disabled") === "true" ||
  el.closest('[aria-disabled="true"]') !== null;
const meta = {
  title: "Pagination/Pagination Previous",
  component: PaginationPrevious,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PaginationPrevious>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };

export const FocusViaKeyboard: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getAllByRole("button")[0].focus();
    await expect(canvas.getAllByRole("button")[0]).toHaveFocus();
  },
};
export const ClickInteraction: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getAllByRole("button")[0]);
    await expect(isDisabled(canvas.getAllByRole("button")[0])).toBe(false);
  },
};
