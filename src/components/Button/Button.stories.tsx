import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";
import { iconNameOptions } from "../Icon/Icon.options";
import { expect, userEvent, within } from "storybook/test";
const isDisabled = (el: HTMLElement) =>
  el.matches(":disabled") ||
  el.getAttribute("aria-disabled") === "true" ||
  el.closest('[aria-disabled="true"]') !== null;
const meta = {
  title: "Buttons/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    iconEnd: { control: "select", options: iconNameOptions },
    iconStart: { control: "select", options: iconNameOptions },
  },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    label: "Button",
    iconEnd: "X",
    hasIconEnd: false,
    hasIconStart: false,
    iconStart: "Star",
    variant: "Primary",
    size: "Medium",
  },
};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };

export const PrimaryWithIconAndClick: Story = {
  args: {
    ...Default.args,
    variant: "Primary",
    hasIconStart: true,
    label: "Submit",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByRole("button", { name: "Submit" })[0],
    ).toBeVisible();
    await userEvent.click(canvas.getAllByRole("button", { name: "Submit" })[0]);
    await expect(
      canvas.getAllByRole("button", { name: "Submit" })[0],
    ).toHaveFocus();
  },
};
export const SmallNeutralButtonFocus: Story = {
  args: { ...Default.args, variant: "Neutral", size: "Small", label: "Cancel" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getAllByRole("button", { name: "Cancel" })[0].focus();
    await expect(
      canvas.getAllByRole("button", { name: "Cancel" })[0],
    ).toHaveFocus();
  },
};
export const SubtleWithIconEnd: Story = {
  args: {
    ...Default.args,
    variant: "Subtle",
    hasIconEnd: true,
    label: "More options",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByRole("button", { name: "More options" })[0],
    ).toBeVisible();
    await expect(
      isDisabled(canvas.getAllByRole("button", { name: "More options" })[0]),
    ).toBe(false);
    await userEvent.click(
      canvas.getAllByRole("button", { name: "More options" })[0],
    );
    await expect(
      canvas.getAllByRole("button", { name: "More options" })[0],
    ).toHaveFocus();
  },
};
