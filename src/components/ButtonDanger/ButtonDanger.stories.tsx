import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonDanger } from "./ButtonDanger";
import { iconNameOptions } from "../Icon/Icon.options";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Buttons/Button Danger",
  component: ButtonDanger,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    iconEnd: { control: "select", options: iconNameOptions },
    iconStart: { control: "select", options: iconNameOptions },
  },
} satisfies Meta<typeof ButtonDanger>;
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

export const PrimaryWithIcons: Story = {
  args: {
    ...Default.args,
    variant: "Primary",
    hasIconStart: true,
    hasIconEnd: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByRole("button", { name: "Button" })[0],
    ).toBeVisible();
    await userEvent.click(canvas.getAllByRole("button", { name: "Button" })[0]);
    await expect(
      canvas.getAllByRole("button", { name: "Button" })[0],
    ).toHaveFocus();
  },
};
export const SubtleSmallHover: Story = {
  args: { ...Default.args, variant: "Subtle", size: "Small" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByRole("button", { name: "Button" })[0],
    ).toBeVisible();
    canvas.getAllByRole("button", { name: "Button" })[0].focus();
    await expect(
      canvas.getAllByRole("button", { name: "Button" })[0],
    ).toHaveFocus();
  },
};
export const CustomLabel: Story = {
  args: { ...Default.args, label: "Delete item" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByRole("button", { name: "Delete item" })[0],
    ).toHaveTextContent("Delete item");
    await userEvent.click(
      canvas.getAllByRole("button", { name: "Delete item" })[0],
    );
    await expect(
      canvas.getAllByRole("button", { name: "Delete item" })[0],
    ).toHaveFocus();
  },
};
