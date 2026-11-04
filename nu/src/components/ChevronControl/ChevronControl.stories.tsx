import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChevronControl } from "./ChevronControl";
import { expect, userEvent, within } from "storybook/test";
const isDisabled = (el: HTMLElement) =>
  el.matches(":disabled") ||
  el.getAttribute("aria-disabled") === "true" ||
  el.closest('[aria-disabled="true"]') !== null;
const meta = {
  title: "  ↳ Controls/Chevron Control",
  component: ChevronControl,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ChevronControl>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { direction: "Left" } };
export const Disabled: Story = { args: { ...Default.args, disabled: true } };

export const LeftDirectionFocus: Story = {
  args: { ...Default.args, direction: "Left" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getAllByRole("button")[0].focus();
    await expect(canvas.getAllByRole("button")[0]).toHaveFocus();
  },
};
export const RightDirectionClick: Story = {
  args: { ...Default.args, direction: "Right" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getAllByRole("button")[0]);
    await expect(isDisabled(canvas.getAllByRole("button")[0])).toBe(false);
  },
};
