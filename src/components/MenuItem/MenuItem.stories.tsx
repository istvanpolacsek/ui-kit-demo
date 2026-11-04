import type { Meta, StoryObj } from "@storybook/react-vite";
import { MenuItem } from "./MenuItem";
import { iconNameOptions } from "../Icon/Icon.options";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Menu/Menu Item",
  component: MenuItem,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: { icon: { control: "select", options: iconNameOptions } },
} satisfies Meta<typeof MenuItem>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    hasDescription: true,
    hasIcon: true,
    icon: "Star",
    hasShortcut: true,
    label: "Menu Label",
    description: "Menu description.",
  },
};

export const WithDescriptionAndShortcut: Story = {
  args: {
    ...Default.args,
    hasDescription: true,
    hasShortcut: true,
    label: "Copy",
    description: "Copy the selected text.",
    shortcut: "⌘C",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Copy")[0]).toBeVisible();
    await expect(canvas.getAllByText("Copy")[0]).toHaveTextContent("Copy");
    await expect(
      canvas.getAllByText("Copy the selected text.")[0],
    ).toBeVisible();
    await expect(
      canvas.getAllByText("Copy the selected text.")[0],
    ).toHaveTextContent("Copy the selected text.");
  },
};
export const HoverRevealsItem: Story = {
  args: { ...Default.args, label: "Paste" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getAllByRole("menuitem")[0]);
    await expect(canvas.getAllByRole("menuitem")[0]).toBeVisible();
    await expect(canvas.getAllByText("Paste")[0]).toHaveTextContent("Paste");
  },
};
export const FocusOnMenuItem: Story = {
  args: {
    ...Default.args,
    label: "Delete",
    hasDescription: true,
    description: "Delete the selected item.",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    canvas.getAllByRole("menuitem")[0].focus();
    await expect(canvas.getAllByRole("menuitem")[0]).toHaveFocus();
    await expect(canvas.getAllByText("Delete")[0]).toHaveTextContent("Delete");
    await expect(
      canvas.getAllByText("Delete the selected item.")[0],
    ).toHaveTextContent("Delete the selected item.");
  },
};
