import type { Meta, StoryObj } from "@storybook/react-vite";
import { MenuShortcut } from "./MenuShortcut";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Menu/Menu Shortcut",
  component: MenuShortcut,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof MenuShortcut>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { shortcut: "⇧A" } };

export const CustomShortcutText: Story = {
  args: { ...Default.args, shortcut: "⌘K" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("⌘K")[0]).toHaveTextContent("⌘K");
  },
};
export const LongShortcutText: Story = {
  args: { ...Default.args, shortcut: "⇧⌥⌘Delete" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("⇧⌥⌘Delete")[0]).toHaveTextContent(
      "⇧⌥⌘Delete",
    );
  },
};
