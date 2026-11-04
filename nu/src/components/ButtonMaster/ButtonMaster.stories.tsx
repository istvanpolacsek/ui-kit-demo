import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonMaster } from "./ButtonMaster";
import { expect, userEvent, within } from "storybook/test";
const isDisabled = (el: HTMLElement) =>
  el.matches(":disabled") ||
  el.getAttribute("aria-disabled") === "true" ||
  el.closest('[aria-disabled="true"]') !== null;
const meta = {
  title: "  ↳ Button/.Button_Master",
  component: ButtonMaster,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ButtonMaster>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    leftIcon: true,
    rightIcon: true,
    label: true,
    bTNValue: "Button",
    iconOnly: "False",
    device: "Desktop",
    size: "Large",
  },
};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };

export const ClickInteraction: Story = {
  args: {
    ...Default.args,
    bTNValue: "Submit",
    size: "Large",
    device: "Desktop",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByRole("button", { name: "Submit" })[0],
    ).toBeVisible();
    await userEvent.click(canvas.getAllByRole("button", { name: "Submit" })[0]);
    await expect(
      isDisabled(canvas.getAllByRole("button", { name: "Submit" })[0]),
    ).toBe(false);
  },
};
export const FocusViaKeyboard: Story = {
  args: {
    ...Default.args,
    bTNValue: "Continue",
    size: "Medium",
    device: "Desktop",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getAllByRole("button", { name: "Continue" })[0].focus();
    await expect(
      canvas.getAllByRole("button", { name: "Continue" })[0],
    ).toHaveFocus();
  },
};
export const MobileSmallButton: Story = {
  args: { ...Default.args, bTNValue: "Go", device: "Mobile", size: "Small" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByRole("button", { name: "Go" })[0],
    ).toBeVisible();
    await userEvent.click(canvas.getAllByRole("button", { name: "Go" })[0]);
    await expect(
      isDisabled(canvas.getAllByRole("button", { name: "Go" })[0]),
    ).toBe(false);
  },
};
