import type { Meta, StoryObj } from "@storybook/react-vite";
import { CalendarButton } from "./CalendarButton";
import { expect, userEvent, within } from "storybook/test";
const isDisabled = (el: HTMLElement) =>
  el.matches(":disabled") ||
  el.getAttribute("aria-disabled") === "true" ||
  el.closest('[aria-disabled="true"]') !== null;
const meta = {
  title: "Calendar/Calendar Button",
  component: CalendarButton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CalendarButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { number: "1" } };

export const Selected: Story = {
  args: { ...Default.args, selected: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("button", { name: "1" })[0]).toBeVisible();
    await expect(
      canvas.getAllByRole("button", { name: "1" })[0],
    ).toHaveTextContent("1");
  },
};
export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      isDisabled(canvas.getAllByRole("button", { name: "1" })[0]),
    ).toBe(true);
  },
};
export const InRange: Story = {
  args: { ...Default.args, inRange: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getAllByRole("button", { name: "1" })[0].focus();
    await expect(canvas.getAllByRole("button", { name: "1" })[0]).toHaveFocus();
  },
};
