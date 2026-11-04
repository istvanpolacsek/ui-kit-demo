import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconButton } from "./IconButton";
import { iconNameOptions } from "../Icon/Icon.options";
import { expect, userEvent, within } from "storybook/test";
const isDisabled = (el: HTMLElement) =>
  el.matches(":disabled") ||
  el.getAttribute("aria-disabled") === "true" ||
  el.closest('[aria-disabled="true"]') !== null;
const meta = {
  title: "Buttons/Icon Button",
  component: IconButton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: { icon: { control: "select", options: iconNameOptions } },
} satisfies Meta<typeof IconButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { icon: "Star", variant: "Primary", size: "Medium" },
};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };

export const PrimaryMediumFocus: Story = {
  args: { ...Default.args, variant: "Primary", size: "Medium" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getAllByRole("button")[0].focus();
    await expect(canvas.getAllByRole("button")[0]).toHaveFocus();
  },
};
export const NeutralSmallClick: Story = {
  args: { ...Default.args, variant: "Neutral", size: "Small" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getAllByRole("button")[0]);
    await expect(isDisabled(canvas.getAllByRole("button")[0])).toBe(false);
  },
};
export const SubtleHover: Story = {
  args: { ...Default.args, variant: "Subtle" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getAllByRole("button")[0].focus();
    await expect(canvas.getAllByRole("button")[0]).toHaveFocus();
  },
};
