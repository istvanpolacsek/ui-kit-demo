import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonPrimary } from "./ButtonPrimary";
import { iconIconNameOptions } from "../Icon/Icon.options";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Design System/Button / Primary",
  component: ButtonPrimary,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: { iconName: { control: "select", options: iconIconNameOptions } },
} satisfies Meta<typeof ButtonPrimary>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    text: "Button",
    hasIcon: true,
    hasText: true,
    mode: "Light",
    size: "L",
    iconName: "mail",
  },
};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };

export const CustomLabelText: Story = {
  args: { ...Default.args, text: "Save changes", hasText: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByRole("button", { name: "Save changes" })[0],
    ).toHaveTextContent("Save changes");
  },
};
export const KeyboardFocus: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getAllByRole("button", { name: "Button" })[0].focus();
    await expect(
      canvas.getAllByRole("button", { name: "Button" })[0],
    ).toHaveFocus();
  },
};
