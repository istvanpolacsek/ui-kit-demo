import type { Meta, StoryObj } from "@storybook/react-vite";
import { MenuShortcut } from "./MenuShortcut";
const meta = {
  title: "Menu/Menu Shortcut",
  component: MenuShortcut,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof MenuShortcut>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { shortcut: "⇧A" } };
