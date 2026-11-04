import type { Meta, StoryObj } from "@storybook/react-vite";
import { VideoControl } from "./VideoControl";
import { expect, userEvent, within } from "storybook/test";
const isDisabled = (el: HTMLElement) =>
  el.matches(":disabled") ||
  el.getAttribute("aria-disabled") === "true" ||
  el.closest('[aria-disabled="true"]') !== null;
const meta = {
  title: "  ↳ Controls/Video Control",
  component: VideoControl,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof VideoControl>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { designType: "Rewind" } };
export const Disabled: Story = { args: { ...Default.args, disabled: true } };

export const PlayButtonClick: Story = {
  args: { ...Default.args, designType: "Play" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("button")[0]).toBeVisible();
    await userEvent.click(canvas.getAllByRole("button")[0]);
    await expect(canvas.getAllByRole("button")[0]).toHaveFocus();
  },
};
export const RewindButtonFocusedViaKeyboard: Story = {
  args: { ...Default.args, designType: "Rewind" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getAllByRole("button")[0].focus();
    await expect(canvas.getAllByRole("button")[0]).toHaveFocus();
  },
};
export const ForwardButtonHover: Story = {
  args: { ...Default.args, designType: "Forward" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(isDisabled(canvas.getAllByRole("button")[0])).toBe(false);
    await userEvent.click(canvas.getAllByRole("button")[0]);
    await expect(canvas.getAllByRole("button")[0]).toHaveFocus();
  },
};
